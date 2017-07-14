
'use strict';

import template from './view-groups.template.html';
import GroupsService from './../../services/groups/groups.service';
import UserService from './../../services/user/user.service';


class ViewGroupsComponent {
    constructor(){
        this.controller = ViewGroupsComponentController;
        this.template = template;
        this.bindings = {
            groups: '<',
        }
    }

    static get name() {
        return 'viewGroups';
    }


}

class ViewGroupsComponentController{
    constructor($state,$scope,GroupsService,UserService) {
        this.$state = $state;
        this.$scope = $scope;
        this.GroupsService = GroupsService;
        this.UserService = UserService;
        this.searchkey = "";
        this.groupsview=this.groups;
    };
    search()
    {
         let searchkey=this.searchkey;
        this.groupsview=this.groups.filter(function(g){
            return g.title.indexOf(searchkey)>=0;
        });
    };
    details (group) {
        let _id = group['_id'];
        this.$state.go('group',{ groupId:_id});
    };

    join (group) {
        if (this.UserService.isAuthenticated()) {
            let user = this.UserService.getCurrentUser();

            group['users'].push(user['_id']);

            this.GroupsService.update(group).then(data => {
                let _id = group['_id']
                this.$state.go('group',{ groupId:_id});
            });

        } else {
            this.$state.go('login',{});
        }
    };

    leave (group) {
        if (this.UserService.isAuthenticated()) {
            let user = this.UserService.getCurrentUser();
            let users = group['users'];

            for(let i = 0; i < users.length; i++) {
                if (users[i] == user['_id']) {
                    users.splice(i,1);
                    group['users'] = users;
                    break;
                }
            }

            this.GroupsService.update(group).then(data => {
                this.$state.go('groups',{});
            })

        } else {
            this.$state.go('login',{});
        }
    }

    edit (group) {

        if (this.UserService.isAuthenticated()) {
            let _id = group['_id'];
            this.$state.go('groupEdit',{ groupId:_id});
        } else {
            this.$state.go('login',{});
        }
    };

    delete(group) {
        if (this.UserService.isAuthenticated()) {
            let _id = group['_id'];

            this.GroupsService.delete(_id).then(response => {
                let index = this.groups.map(x => x['_id']).indexOf(_id);
                this.groups.splice(index, 1);
                this.$scope.$apply();
            })

        } else {
            this.$state.go('login',{});
        }
    };

    isJoined(group) {
        let user = this.UserService.getCurrentUser();
        let users = group['users'];
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
        return ['$state', '$scope' ,GroupsService.name, UserService.name];
    }

}

export default ViewGroupsComponent;
