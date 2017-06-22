
'use strict';

import template from './view-profile.template.html';

import UserService from './../../services/user/user.service';

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
        //this.movie = {};
        this.$state = $state;
        //this.MoviesService = MoviesService;
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

    getCurrentUser(){
        let user = this.UserService.getCurrentUser();
        return user.username;
    }


    static get $inject(){
        return ['$state', UserService.name];
    }

}


export default ViewProfileComponent;