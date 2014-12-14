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
    'click #create': 'createColorstop',
    'click .remove': 'removeColorstop',
    'click #reset-to-defaults': 'resetToDefaults'
  },

  initialize: function () {
    this.listenTo(this.collection, 'add', this.addOne);
    this.listenTo(this.collection, 'reset', this.addAll);
  },

  render: function () {
    this.$el.html(this.template(this.collection.toJSON()));
    this.renderPreview();
    this.$items = this.$('.items');
  },

  addOne: function (item) {
    console.log('adding item with color', item.get('color'));
    var view = new Sunrise.Views.Colorstop({ model: item });
    this.$('ul').append(view.render().el);
    this.renderPreview();
  },

  addAll: function () {
    this.$items.empty();
    this.collection.each(this.addOne, this);
  },

  createColorstop: function (event) {
    event.preventDefault();

    var color = this.$('#color').val().trim();
    var time = this.$('#time').val().trim();

    var newModel = new Sunrise.Models.Colorstop({
      color: color,
      time: time
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
    var totalHeight = 300;
    var gradient = context.createLinearGradient(0, 0, 0, totalHeight);
    if (this.collection.length === 0) {
      console.log("noting to preview :(");
      return;
    }

    // TODO: obey stated timestops
    var fraction = 1 / this.collection.length;

    this.collection.forEach(function (el, index, list) {
      var color = el.get('color');
      gradient.addColorStop(index * fraction, el.get('color'));
    });

    context.fillStyle = gradient;
    context.fillRect(0, 0, 600, 300);
  },

  resetToDefaults: function () {
    this.collection.resetToDefaults();
  }
});



})();
