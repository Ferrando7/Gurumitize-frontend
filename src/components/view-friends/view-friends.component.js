
'use strict';

import template from './view-friends.template.html';
import friendsService from './../../services/friends/friends.service';
import UserService from './../../services/user/user.service';


class ViewfriendsComponent {
    constructor(){
        this.controller = ViewfriendsComponentController;
        this.template = template;
        this.bindings = {
            users: '<',
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

        this.current = {};
        this.mentors = [];
        this.mentees = [];
        this.others = [];
    }

    $onInit(){
        for(var i = 0; i < this.users.length; i++){
            if(this.users[i]._id === this.UserService.getCurrentUser()._id){
                this.current = this.users[i];
            }
        }
        for(var i = 0; i < this.users.length; i++){
            if(this.containsObject(this.users[i]._id, this.current.mentors)){
                this.mentors.push(this.users[i]);

                if(this.containsObject(this.users[i]._id, this.current.mentees)){
                    this.mentees.push(this.users[i]);
                }
            }

            else if(this.containsObject(this.users[i]._id, this.current.mentees)){
                this.mentees.push(this.users[i]);
            }
            else if(this.users[i]._id === this.current._id){}
            else {
                this.others.push(this.users[i]);
            }
        }
    }

    /*details (friends) {
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
    };*/

    containsObject(obj, list) {
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i] === obj) {
                return true;
            }
        }

        return false;
    }

    goTo(user) {
        let _id = user._id;
        this.$state.go('profile',{userId:_id})
    }


    static get $inject(){
        return ['$state', '$scope' ,friendsService.name, UserService.name];
    }

}

export default ViewfriendsComponent;
