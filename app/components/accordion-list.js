import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  items: [],

  openItem: null,

  actions: {
    selectItem(item) {
      this.set('openItem', item);
    }
  }
});
