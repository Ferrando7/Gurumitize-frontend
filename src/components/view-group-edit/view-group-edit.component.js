'use strict';

import template from './view-group-edit.template.html';

import GroupsService from './../../services/groups/groups.service';

class ViewGroupEditComponent {
    constructor(){
        this.controller = ViewGroupEditComponentController;
        this.template = template;
        this.bindings = {
            group: '<',
        }
    }

    static get name() {
        return 'viewGroupEdit';
    }
}

class ViewGroupEditComponentController{
    constructor($state, GroupsService){
        this.model = {};
        this.$state = $state;
        this.GroupsService = GroupsService;

        var comma = 188;
        var enter = 13;
        this.keys = [comma, enter];
    }

    $onInit() {
        //Clone the group Data
        this.model = JSON.parse(JSON.stringify(this.group))
    }

    cancel() {
        this.model = JSON.parse(JSON.stringify(this.group));
        this.$state.go('groups',{});
    };

    save() {
        let _id = this.group['_id'];

        this.GroupsService.update(this.model).then(data => {
            this.group = JSON.parse(JSON.stringify(data));

            this.$state.go('group',{ groupId:_id});
        });

    };

    delete() {
        let _id = this.group['_id'];

        this.GroupService.delete(_id).then(response => {
            this.$state.go('groups',{});
        });
    };

    static get $inject(){
        return ['$state', GroupsService.name];
    }

}


export default ViewGroupEditComponent;
