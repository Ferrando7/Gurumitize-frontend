
'use strict';

import template from './view-group.template.html';
import GroupsService from './../../services/groups/groups.service';
import UserService from './../../services/user/user.service';

class ViewGroupComponent {
    constructor(){
        this.controller = ViewGroupComponentController;
        this.template = template;
        this.bindings = {
            group: '<',
            users: '<',
        }

    }

    static get name() {
        return 'viewGroup';
    }


}

class ViewGroupComponentController{
    constructor($state,GroupsService,UserService){
        this.$state = $state;
        this.GroupsService = GroupsService;
        this.UserService = UserService;

        this.members = [];
    }

    $onInit() {
        for(var i = 0; i < this.users.length; i++){
            for(var j = 0; j < this.group['users'].length; j++){
                if(this.users[i]._id === this.group['users'][j]){
                    this.members.push(this.users[i]);
                }
            }
        }
    }

    join () {
        if (this.UserService.isAuthenticated()) {
            let user = this.UserService.getCurrentUser();

            this.group['users'].push(user['_id']);
            this.members.push(this.users.find(u => u._id === user['_id']));

            this.GroupsService.update(this.group).then(data => {
                let _id = this.group['_id'];
                this.$state.go('group',{ groupId:_id});
            });

        } else {
            this.$state.go('login',{});
        }
    };

    leave () {
        if (this.UserService.isAuthenticated()) {
            let user = this.UserService.getCurrentUser();
            let users = this.group['users'];
            let tempMembers = this.members;

            for(let i = 0; i < users.length; i++) {
                if (users[i] == user['_id']) {
                    users.splice(i,1);
                    this.group['users'] = users;
                    break;
                }
            }

            for(let i = 0; i < this.members.length; i++) {
                if (tempMembers[i]._id == user['_id']) {
                    tempMembers.splice(i,1);
                    this.members = tempMembers;
                    break;
                }
            }


            this.GroupsService.update(this.group).then(data => {
                let _id = this.group['_id']
                this.$state.go('group',{ groupId:_id});
            })

        } else {
            this.$state.go('login',{});
        }
    }

    edit () {

        if (this.UserService.isAuthenticated()) {
            let _id = this.group['_id'];
            this.$state.go('groupEdit',{ groupId:_id});
        } else {
            this.$state.go('login',{});
        }

    };


    delete() {
        if (this.UserService.isAuthenticated()) {
            let _id = this.group['_id'];

            this.GroupsService.delete(_id).then(response => {
                this.$state.go('groups',{});
            });
        } else {
            this.$state.go('login',{});
        }
    };

    isJoined() {
        let user = this.UserService.getCurrentUser();
        let users = this.group['users'];
        let found = false;
        for(let i = 0; i < users.length; i++) {
            if (users[i] == user['_id']) {
                found = true;
                break;
            }
        }
        return found;
    }

    static get $inject(){
        return ['$state', GroupsService.name, UserService.name];
    }

    toUser(user) {
        let _id = user._id;
        this.$state.go('profile',{userId:_id})
    }

}

export default ViewGroupComponent;
