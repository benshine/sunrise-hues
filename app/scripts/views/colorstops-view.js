/*global Sunrise, Backbone, JST*/

Sunrise.Views = Sunrise.Views || {};

(function () {
'use strict';

Sunrise.Views.Colorstops = Backbone.View.extend({
  el: '.colorstop-controls',
  template: JST['app/scripts/templates/colorstops.ejs'],
  tagName: 'div',
  id: '',
  className: '',

  events: {
    'click #create': 'createColorstop',
    'click .remove': 'removeColorstop'
  },

  initialize: function () {
    this.listenTo(this.collection, 'add', this.addOne);
    this.listenTo(this.collection, 'reset', this.addAll);
    this.listenTo(this.collection, 'change', this.renderPreview);
  },

  render: function () {
    this.$el.html(this.template(this.collection.toJSON()));
    this.renderPreview();
    this.$items = this.$('.items');
  },

  addOne: function (item) {
    var view = new Sunrise.Views.Colorstop({ model: item });
    this.$('ul').append(view.render().el);
    this.renderPreview();
  },

  addAll: function () {
    this.$items.empty();
    this.collection.each(this.addOne, this);
    this.renderPreview();
  },

  createColorstop: function (event) {
    event.preventDefault();
    var color = this.$('#color').val().trim();
    var newModel = new Sunrise.Models.Colorstop({
      color: color
    });
    newModel.set('id', newModel.cid); // Standin for a real id.
    this.collection.create(newModel);
  },

  removeColorstop: function (event) {
    var $container = $(event.target).closest('.colorstop');
    var id = $container.attr('data-id');
    var toRemove = this.collection.get(id);
    this.collection.remove(toRemove);
    $container.remove();
    this.renderPreview();
  },

  renderPreview: function () {
    var canvas = document.getElementById('sunrise');
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    var collectionLength = this.collection.length;
    if (collectionLength === 0) {
      return;
    }

    var totalHeight = collectionLength * Sunrise.Views.Colorstops.STRIPE_HEIGHT;
    canvas.height = totalHeight;
    var gradient = context.createLinearGradient(0, 0, 0, totalHeight);

    var fraction = 1 / this.collection.length;

    this.collection.forEach(function (el, index, list) {
      var color = el.get('color');
      gradient.addColorStop(index * fraction, el.get('color'));
    });

    context.fillStyle = gradient;
    context.fillRect(0, 0, Sunrise.Views.Colorstops.CANVAS_WIDTH, totalHeight);
  }
}, {
  STRIPE_HEIGHT: 80, // pixels
  CANVAS_WIDTH: 8000 // pixels
});
})();
