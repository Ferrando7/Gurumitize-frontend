
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
    constructor($state,$scope,GroupsService,UserService){
        this.$state = $state;
        this.$scope = $scope;
        this.GroupsService = GroupsService;
        this.UserService = UserService;

    }

    details (group) {
        let _id = group['_id'];
        this.$state.go('group',{ groupId:_id});
    };

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


    static get $inject(){
        return ['$state', '$scope' ,GroupsService.name, UserService.name];
    }

}

export default ViewGroupsComponent;