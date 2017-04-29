'use strict';


export default class UserService {

    static get $inject(){
        return ['$http', '$window','API_URL'];
    }

    constructor($http,$window,API_URL) {
        this.$http = $http;
        this.$window = $window;
        this.API_URL = API_URL;

    }

    static get name(){
        return 'userService';
    }

    register(user, pass) {
        return this.$http.post(`${ this.API_URL }/signup`, {
            username: user,
            password: pass
        });
    }

    login(user, pass) {
        return this.$http.post(`${ this.API_URL }/login`, {
            username: user,
            password: pass
        });
    }

    getCurrentUser() {
        let token = this.$window.localStorage['jwtToken'];
        if (!token) return {};

        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(this.$window.atob(base64)).user;
    }

    isAuthenticated() {
        return !!this.$window.localStorage['jwtToken'];
    }


}