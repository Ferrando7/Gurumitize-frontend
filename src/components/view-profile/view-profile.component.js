
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
            users: '<',
        }
    }

    static get name() {
        return 'viewProfile';
    }
}

class ViewProfileComponentController{
    constructor($state,UserService){
        this.model = {};
        this.current = {};
        //this.group = {};
        this.$state = $state;
        //this.GroupsService = GroupsService;
        this.UserService = UserService;
        this.imagePath = 'http://via.placeholder.com/200x200';
    }

    $onInit() {
        this.model = JSON.parse(JSON.stringify(this.user));
        for(var i = 0; i < this.users.length; i++){
            if(this.users[i]._id === this.UserService.getCurrentUser()._id){
                this.current = this.users[i];
                break;
            }
        }
        console.log(this.current)
    }

    addMentor() {
        this.model['mentees'].push(this.current._id);
        this.current.mentors.push(this.model['_id']);

        this.UserService.update(this.model).then(data => {
            let _id = this.model['_id'];
            this.$state.go('profile',{ userId:_id});
        });

        this.UserService.update(this.current).then(data => {
            let _id = this.model['_id'];
            this.$state.go('profile',{ userId:_id});
        });
    };

    addMentee() {
        this.model['mentors'].push(this.current._id);
        this.current.mentees.push(this.model['_id']);

        this.UserService.update(this.model).then(data => {
            let _id = this.model['_id'];
            this.$state.go('profile',{ userId:_id});
        });

        this.UserService.update(this.current).then(data => {
            let _id = this.model['_id'];
            this.$state.go('profile',{ userId:_id});
        });
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
            let _id = this.model['_id'];
            this.$state.go('profileEdit',{ userId:_id});
        } else {
            this.$state.go('login',{});
        }

    };

    deleteUser() {
        this.UserService.deleteUser().then(()=> {
            this.UserService.logout();
            this.$state.go('welcome',{});
        });
    };

    isOwnProfile() {
        let modelId = this.model['_id'];
        let currentId = this.UserService.getCurrentUser()._id;

        return modelId === currentId;
    }


    static get $inject(){
        return ['$state', UserService.name];
    }

}


export default ViewProfileComponent;
