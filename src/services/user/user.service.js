'use strict';


export default class UserService {

    static get $inject(){
        return ['$http', '$window','API_URL'];
    }

    constructor($http,$window,API_URL) {
        this.$http = $http;
        this.$window = $window;
        this.resourceUrl = `${ API_URL }/user/`;

    }

    static get name(){
        return 'UserService';
    }

    get(id) {
        let url = `${ this.resourceUrl }${ id }`;
        return this.$http.get(url).then(responce => {

            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });

        })
    }

    update(user) {

        let url = `${ this.resourceUrl }${ user['_id'] }`;
        return this.$http.put(url,user).then(responce => {

            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });
        })
    }

    register(user, pass, vorname, surname, email,bio,skills,goals) {
        return this.$http.post(`${ this.API_URL }/user/signup`, {
            username: user,
            password: pass,
            vorname: vorname,
            surname: surname,
            email: email,
            bio: bio,
            skills: skills,
            goals: goals
        });
    }

    login(user, pass) {
        return this.$http.post(`${ this.API_URL }/user/login`, {
            username: user,
            password: pass
        });
    }

    logout(){
        this.$window.localStorage.removeItem('jwtToken');
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
        //return true;
    }


}
