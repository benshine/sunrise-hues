/*global Sunrise, Backbone, JST*/

Sunrise.Views = Sunrise.Views || {};

(function () {
    'use strict';

    Sunrise.Views.Colorstops = Backbone.View.extend({

        el: '#sunrise-app',

        template: JST['app/scripts/templates/colorstops.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {
            'click #create': 'createColorstop'
        },

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.collection, 'add', this.addColorstop);
        },

        render: function () {
            this.$el.html(this.template(this.collection.toJSON()));
        },

        addColorstop: function (item) {
            // this is for when it's already in the collection; we just need to render it
            var view = new Sunrise.Views.Colorstop({ model: item });
            this.$('ul').append(view.render().el);
        },

        createColorstop: function (event) {
            event.preventDefault();

            var color = this.$('#color').val().trim();
            var name = this.$('#name').val().trim();
            var time = this.$('#time').val().trim();

            var newModel = new Sunrise.Models.Colorstop({
              name: name,
              color: color,
              time: time
            });
            newModel.set('id', newModel.cid); // Standin for a real id.
            this.collection.create(newModel);
        }

    });

})();
