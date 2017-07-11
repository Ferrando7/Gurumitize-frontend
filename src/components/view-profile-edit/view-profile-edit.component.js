
'use strict';

import template from './view-profile-edit.template.html';

import UserService from './../../services/user/user.service';
//import GroupsService from './../../services/groups/groups.service';

class ViewProfileEditComponent {
    constructor(){
        this.controller = ViewProfileEditComponentController;
        this.template = template;
        this.bindings = {
            user: '<',
        }
    }

    static get name() {
        return 'viewProfileEdit';
    }
}

class ViewProfileEditComponentController{
    constructor($state,UserService){
        this.model = {};
        //this.group = {};
        this.$state = $state;
        //this.GroupsService = GroupsService;
        this.UserService = UserService;
    }

    $onInit() {
        //Clone the user Data
        this.model = JSON.parse(JSON.stringify(this.user));
        console.log(this.model);
    }

    remove(skill) {
        let skills = this.model['skills'];

        for(let i = 0; i < skills.length; i++) {
            if(skills[i] === skill){
                skills.splice(i,1);
                this.model['skills'] = skills;
                break;
            }
        }
    }

    addSkill() {
        this.model['skills'].push({name:"", rank:0});
    }

    cancel() {
        let _id = user['_id'];
        this.$state.go('profile',{userId:_id});
    };

    save() {
        let _id = this.model['_id'];

        this.UserService.update(this.model).then(data => {
            this.model = JSON.parse(JSON.stringify(data));
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
