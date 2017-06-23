'use strict';

import template from './view-group-create.template.html';

import GroupsService from './../../services/groups/groups.service';
import UserService from './../../services/user/user.service';

class ViewGroupCreateComponent {
    constructor(){
        this.controller = ViewGroupCreateComponentController;
        this.template = template;
    }

    static get name() {
        return 'viewGroupCreate';
    }
}

class ViewGroupCreateComponentController{
    constructor($state, GroupsService,UserService){
        this.event = {};
        this.$state = $state;
        this.GroupsService = GroupsService;
        this.UserService = UserService;
    }

    cancel() {
        this.$state.go('events',{});
    };

    save() {
        let user = this.UserService.getCurrentUser();

        this.event['user'] = user['_id'];
        this.GroupsService.create(this.event).then(data => {
            let _id = data['_id'];
            this.$state.go('events',{ eventId:_id});
        });

    };

    static get $inject(){
        return ['$state', GroupsService.name, UserService.name];
    }

}


export default ViewGroupCreateComponent;