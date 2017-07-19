
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

    removeMentor() {
        let menteeIndex = this.model['mentees'].indexOf(this.current._id);
        let mentorIndex = this.current.mentors.indexOf(this.model['_id']);

        this.model['mentees'].splice(menteeIndex,1);
        this.current.mentors.splice(mentorIndex,1);

        this.UserService.update(this.model).then(data => {
            let _id = this.model['_id'];
            this.$state.go('profile',{ userId:_id});
        });

        this.UserService.update(this.current).then(data => {
            let _id = this.model['_id'];
            this.$state.go('profile',{ userId:_id});
        });
    }

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

    removeMentee() {
        let mentorIndex = this.model['mentors'].indexOf(this.current._id);
        let menteeIndex = this.current.mentees.indexOf(this.model['_id']);

        this.model['mentors'].splice(mentorIndex,1);
        this.current.mentees.splice(menteeIndex,1);

        this.UserService.update(this.model).then(data => {
            let _id = this.model['_id'];
            this.$state.go('profile',{ userId:_id});
        });

        this.UserService.update(this.current).then(data => {
            let _id = this.model['_id'];
            this.$state.go('profile',{ userId:_id});
        });
    }

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

    isMentor() {
        return this.containsObject(this.model['_id'], this.current.mentors);
    }

    isMentee() {
        return this.containsObject(this.model['_id'], this.current.mentees);
    }

    containsObject(obj, list) {
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i] === obj) {
                return true;
            }
        }

        return false;
    }


    static get $inject(){
        return ['$state', UserService.name];
    }

}


export default ViewProfileComponent;
