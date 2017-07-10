'use strict';

import template from './view-group-create.template.html';
import './view-group-create.style.css'

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
        this.group = {};
        this.$state = $state;
        this.GroupsService = GroupsService;
        this.UserService = UserService;

        this.group['tags'] = [];

        var comma = 188;
        var enter = 13;
        this.keys = [comma, enter];
    }

    cancel() {
        this.$state.go('groups',{});
    };

    save() {
        let user = this.UserService.getCurrentUser();

        this.group['users'] = [user['_id']];
        this.GroupsService.create(this.group).then(data => {
            let _id = data['_id'];
            this.$state.go('group',{ groupId:_id});
        });

    };

    static get $inject(){
        return ['$state', GroupsService.name, UserService.name];
    }

}


export default ViewGroupCreateComponent;
