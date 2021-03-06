import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  item: {},
  openItem: null,

  isOpen: Ember.computed('item', 'openItem', function() {
    return this.get('item') === this.get('openItem');
  }),

  click() {
    let item = this.get('item');
    this.attrs.selectItem(item);
  }
});
