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
            'submit': 'createColorstop'
        },

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.collection, 'add', this.addColorstop);
        },

        render: function () {
            console.log("rendering collection view");
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

            this.collection.create( new Sunrise.Models.Colorstop({
                name: name,
                color: color,
                time: time
            }));

        }

    });

})();
