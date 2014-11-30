/*global Sunrise, Backbone*/

Sunrise.Collections = Sunrise.Collections || {};

(function () {
    'use strict';

    Sunrise.Collections.Colorstops = Backbone.Collection.extend({

        model: Sunrise.Models.Colorstop

    });

})();
