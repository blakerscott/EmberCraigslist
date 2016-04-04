import Ember from 'ember';

export default Ember.Component.extend({
  addNewCategory: false,
  actions: {
    listingFormShow() {
      this.set('addNewListing', true);
    },
    save1() {
      var params = {
        name: this.get('name') ? this.get('name'): ""
      }:
      this.set('addNewCategory', false);
      this.sendAction('save2', params);
    }
  }
});
