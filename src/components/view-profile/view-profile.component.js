
'use strict';

import template from './view-profile.template.html';

import MoviesService from './../../services/movies/movies.service';
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
    constructor($state, MoviesService,UserService){
        this.movie = {};
        this.$state = $state;
        this.MoviesService = MoviesService;
        this.UserService = UserService;
    }

    cancel() {
        this.$state.go('movies',{});
    };

    save() {
        let user = this.UserService.getCurrentUser();

        this.movie['user'] = user['_id'];
        this.MoviesService.create(this.movie).then(data => {
            let _id = data['_id'];
            this.$state.go('movie',{ movieId:_id});
        });

    };


    static get $inject(){
        return ['$state', MoviesService.name, UserService.name];
    }

}


export default ViewProfileComponent;