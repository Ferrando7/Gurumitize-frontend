'use strict';

import angular from 'angular';

//import EventsService from './events.service';
import EventsService from './events.local.service';


export default angular.module('EventsServiceDefinition', [])
    .service(EventsService.name, EventsService)