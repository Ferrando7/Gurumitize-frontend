
'use strict';

import UserService from './../../services/user/user.service';

import template from './view-profile.template.html';
import './view-profile.style.css';

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
        this.$state = $state;
        this.UserService = UserService;
    }

    $onInit() {
        this.login = {};
    }

    submit(){
        let user = this.login.username;
        let password = this.login.password;

        this.UserService.login(user,password).then(()=> {
            this.$state.go('movies',{});
        });
    }

    static get $inject(){
        return ['$state', UserService.name];
    }

}


export default ViewProfileComponent;