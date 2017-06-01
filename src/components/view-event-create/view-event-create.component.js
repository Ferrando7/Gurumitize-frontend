
'use strict';

import template from './view-movie-create.template.html';

import MoviesService from './../../services/movies/movies.service';
import UserService from './../../services/user/user.service';

class ViewEventCreateComponent {
    constructor(){
        this.controller = ViewEventCreateComponentController;
        this.template = template;
    }

    static get name() {
        return 'viewEventCreate';
    }
}

class ViewEventCreateComponentController{
    constructor($state, EventsService,UserService){
        this.event = {};
        this.$state = $state;
        this.EventsService = EventsService;
        this.UserService = UserService;
    }

    cancel() {
        this.$state.go('events',{});
    };

    save() {
        let user = this.UserService.getCurrentUser();

        this.movie['user'] = user['_id'];
        this.EventsService.create(this.event).then(data => {
            let _id = data['_id'];
            this.$state.go('events',{ eventId:_id});
        });

    };


    static get $inject(){
        return ['$state', EventsService.name, UserService.name];
    }

}


export default ViewEventCreateComponent;