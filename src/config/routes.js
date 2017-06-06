'use strict';

import MoviesComponent from './../components/view-movies/view-movies.component';
import MovieComponent from './../components/view-movie/view-movie.component';
import MovieEditComponent from './../components/view-movie-edit/view-movie-edit.component';
import MovieCreateComponent from './../components/view-movie-create/view-movie-create.component';
import EventsComponent from './../components/view-events/view-events.component';
import EventComponent from './../components/view-event/view-event.component';
import EventEditComponent from './../components/view-event-edit/view-event-edit.component';
import EventCreateComponent from './../components/view-event-create/view-event-create.component';
import LoginComponent from './../components/view-login/view-login.component';
import RegisterComponent from './../components/view-register/view-register.component';
import ProfileComponent from './../components/view-profile/view-profile.component';

import MoviesService from './../services/movies/movies.service';
import EventsService from './../services/events/events.service';


resolveMovie.$inject = ['$stateParams', MoviesService.name];
function resolveMovie($stateParams,moviesService){
    return moviesService.get($stateParams.movieId);
}

resolveMovies.$inject = [MoviesService.name];
function resolveMovies(moviesService){
    return moviesService.list();
}

resolveEvent.$inject = ['$stateParams', EventsService.name];
function resolveEvent($stateParams,eventsService){
    return eventsService.get($stateParams.eventId);
}

resolveEvents.$inject = [EventsService.name];
function resolveEvents(eventsService){
    return eventsService.list();
}


config.$inject = ['$stateProvider', '$urlRouterProvider'];
export default function config ($stateProvider, $urlRouterProvider){

    // For any unmatched url, redirect to /home
    $urlRouterProvider.otherwise("/movies");
    //$urlRouterProvider.otherwise("/events");

    $stateProvider
        .state('movies', {
            url: '/movies',
            component: MoviesComponent.name,
            resolve: {
                movies : resolveMovies
            }
        })
        .state('movieAdd', {
            url: '/movies/new',
            component: MovieCreateComponent.name
        })
        .state('movie', {
            url: '/movies/:movieId',
            component: MovieComponent.name,
            resolve: {
                movie : resolveMovie
            }

        })
        .state('movieEdit', {
            url: '/movies/:movieId/edit',
            component: MovieEditComponent.name,
            resolve: {
                movie : resolveMovie
            }
        })
        .state('events', {
            url: '/events',
            component: EventsComponent.name,
            resolve: {
                movies : resolveEvents
            }
        })
        .state('eventAdd', {
            url: '/events/new',
            component: EventCreateComponent.name
        })
        .state('event', {
            url: '/events/:eventId',
            component: EventComponent.name,
            resolve: {
                event : resolveEvent
            }

        })
        .state('eventEdit', {
            url: '/events/:eventId/edit',
            component: EventEditComponent.name,
            resolve: {
                event : resolveEvent
            }
        })
        .state('login', {
            url: '/login',
            component: LoginComponent.name,
        })
        .state('register', {
            url: '/register',
            component: RegisterComponent.name,
        })
        .state('profile', {
            url: '/profile',
            component: ProfileComponent.name,
        })



}

