
'use strict';

import template from './view-groups.template.html';
import GroupsService from './../../services/groups/groups.service';
import UserService from './../../services/user/user.service';


class ViewGroupsComponent {
    constructor(){
        this.controller = ViewGroupsComponentController;
        this.template = template;
        this.bindings = {
            events: '<',
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

    details (event) {
        let _id = event['_id'];
        this.$state.go('event',{ eventId:_id});
    };

    edit (event) {

        if (this.UserService.isAuthenticated()) {
            let _id = event['_id'];
            this.$state.go('eventEdit',{ eventId:_id});
        } else {
            this.$state.go('login',{});
        }
    };

    delete(event) {
        if (this.UserService.isAuthenticated()) {
            let _id = event['_id'];

            this.GroupsService.delete(_id).then(response => {
                let index = this.events.map(x => x['_id']).indexOf(_id);
                this.events.splice(index, 1);
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