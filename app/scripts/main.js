/*global Sunrise, $*/


window.Sunrise = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
        var thing = new this.Models.Colorstop();
        window.thing = thing;

        var collection = new this.Collections.Colorstops();
        window.collection = collection;

        collection.add(thing);

        var view = new this.Views.Colorstop( { model: thing, el: $('.colorstop-1') });
        view.render();
    }
};

$(document).ready(function () {
    'use strict';
    Sunrise.init();
});
