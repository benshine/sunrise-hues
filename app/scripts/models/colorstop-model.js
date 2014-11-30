/*global Sunrise, Backbone*/

Sunrise.Models = Sunrise.Models || {};

(function () {
    'use strict';

    Sunrise.Models.Colorstop = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
            color: '#F88',
            time: 0,
            name: 'nameless'
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
