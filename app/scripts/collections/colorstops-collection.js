/*global Sunrise, Backbone*/

Sunrise.Collections = Sunrise.Collections || {};

(function () {
    'use strict';

    //localStorage: new Backbone.LocalStorage('sunrise-hues');

    Sunrise.Collections.Colorstops = Backbone.Collection.extend({

    model: Sunrise.Models.Colorstop

    });

})();
