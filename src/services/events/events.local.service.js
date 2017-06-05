'use strict';

import EventsAPISimulator from './events.api.simulator';


export default class EventsLocalService {

    constructor() {

    }

    static get name(){
        return 'eventsService';
    }


    list(){
       return EventsAPISimulator.getEventsAsync().then(responce => {
            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });

        })
    }


    get(id){
        return EventsAPISimulator.getEventByIdAsync(id).then(responce => {
            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });

        })

    }

    create(event){
        return EventsAPISimulator.createEvent(event).then(responce => {
            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });

        });

    }

    delete(id){
        return EventsAPISimulator.deleteEvent(id).then(responce => {
            return new Promise((resolve, reject) => {
                resolve(responce.status);
            });

        });

    }

    update(event){
        return EventsAPISimulator.updateEvent(event).then(responce => {
            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });

        });
    }

}