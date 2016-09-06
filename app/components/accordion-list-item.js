import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  item: {},

  isOpen: false,

  click() {
    this.toggleProperty('isOpen');
  }
});
