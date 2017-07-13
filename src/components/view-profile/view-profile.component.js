
'use strict';

import template from './view-profile.template.html';

import UserService from './../../services/user/user.service';
//import GroupsService from './../../services/groups/groups.service';

class ViewProfileComponent {
    constructor(){
        this.controller = ViewProfileComponentController;
        this.template = template;

    }

    static get name() {
        return 'viewProfile';
    }
}

class ViewProfileComponentController{
    constructor($state,UserService){
        //this.group = {};
        this.$state = $state;
        //this.GroupsService = GroupsService;
        this.UserService = UserService;

    }
    /*
    cancel() {
        this.$state.go('events',{});
    };

    save() {
        let user = this.UserService.getCurrentUser();

        this.movie['user'] = user['_id'];
        this.MoviesService.create(this.movie).then(data => {
            let _id = data['_id'];
            this.$state.go('movie',{ movieId:_id});
        });

    };*/
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


    static get $inject(){
        return ['$state', UserService.name];
    }

}


export default ViewProfileComponent;