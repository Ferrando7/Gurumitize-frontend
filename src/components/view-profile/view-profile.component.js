
'use strict';

import template from './view-profile.template.html';

import UserService from './../../services/user/user.service';
//import GroupsService from './../../services/groups/groups.service';

class ViewProfileComponent {
    constructor(){
        this.controller = ViewProfileComponentController;
        this.template = template;
        this.bindings = {
            user: '<',
        }
    }

    static get name() {
        return 'viewProfile';
    }
}

class ViewProfileComponentController{
    constructor($state,UserService){
        this.model = {};
        //this.group = {};
        this.$state = $state;
        //this.GroupsService = GroupsService;
        this.UserService = UserService;
        this.imagePath = 'http://via.placeholder.com/200x200';
    }

    $onInit() {
        this.model = JSON.parse(JSON.stringify(this.user));
    }

    addMentor() {

    };

    addMentee() {

    };
    /*To-do
     Show the groups the user belongs to
     Show the skill
     Add a profile picture
      */
    getCurrentUser(){
        let user = this.UserService.getCurrentUser();
        return user.username;
    }

    getCurrentUserName(){
        let user = this.UserService.getCurrentUser();
        return user.vorname;
    }

    getCurrentUserSurname(){
        let user = this.UserService.getCurrentUser();
        return user.surname;
    }

    getCurrentUserEmail(){
        let user = this.UserService.getCurrentUser();
        return user.email;
    }

    edit () {

        if (this.UserService.isAuthenticated()) {
            let _id = this.user['_id'];
            this.$state.go('profileEdit',{ userId:_id});
        } else {
            this.$state.go('login',{});
        }

    };


    static get $inject(){
        return ['$state', UserService.name];
    }

}


export default ViewProfileComponent;
