
'use strict';

import template from './view-friends.template.html';
import friendsService from './../../services/friends/friends.service';
import UserService from './../../services/user/user.service';


class ViewfriendsComponent {
    constructor(){
        this.controller = ViewfriendsComponentController;
        this.template = template;
        this.bindings = {
            friends: '<',
        }
    }

    static get name() {
        return 'viewfriends';
    }


}

class ViewfriendsComponentController{
    constructor($state,$scope,friendsService,UserService){
        this.$state = $state;
        this.$scope = $scope;
        this.friendsService = friendsService;
        this.UserService = UserService;

    }

    details (friends) {
        let _id = friends['_id'];
        this.$state.go('friends',{ friendsId:_id});
    };

    edit (friends) {

        if (this.UserService.isAuthenticated()) {
            let _id = friends['_id'];
            this.$state.go('friendsEdit',{ friendsId:_id});
        } else {
            this.$state.go('login',{});
        }
    };
    
    delete(friends) {
        if (this.UserService.isAuthenticated()) {
            let _id = friends['_id'];

            this.friendsService.delete(_id).then(response => {
                let index = this.friends.map(x => x['_id']).indexOf(_id);
                this.friends.splice(index, 1);
                this.$scope.$apply();
            })

        } else {
            this.$state.go('login',{});
        }
    };


    static get $inject(){
        return ['$state', '$scope' ,friendsService.name, UserService.name];
    }

}

export default ViewfriendsComponent;