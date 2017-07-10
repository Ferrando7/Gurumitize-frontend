
'use strict';

import template from './view-profile-edit.template.html';

import UserService from './../../services/user/user.service';
//import GroupsService from './../../services/groups/groups.service';

class ViewProfileEditComponent {
    constructor(){
        this.controller = ViewProfileEditComponentController;
        this.template = template;
    }

    static get name() {
        return 'viewProfileEdit';
    }
}

class ViewProfileEditComponentController{
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

    getCurrentUserBio(){
        return "A really cool bio.\n\nI'm really cool."
    }

    getCurrentUserGoals(){
        return "Ruby, Python"
    }


    static get $inject(){
        return ['$state', UserService.name];
    }

}


export default ViewProfileEditComponent;
