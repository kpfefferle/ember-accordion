import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  items: [],

  openItem: Ember.computed('items.[]', function() {
    let items = this.get('items');
    return items[0];
  })
});
