import Ember from 'ember';

export default Ember.Component.extend({
  addNewListing: false,
  actions: {
    listingFormShow() {
      this.set('addNewListing', true);
    },
    save1() {
      var params = {
        name: this.get('name') ? this.get('name'): "",
        image: this.get('image') ? this.get('image'): "",
        price: this.get('price') ? this.get('price'): "",
        location: this.get('location') ? this.get('location'): "",
        description: this.get('description') ? this.get('description'): "",
        contactModel: this.get('contactModel') ? this.get('contactModel'): "",
        contactEmail: this.get('contactEmail') ? this.get('contactEmail'): "",
        latitude: this.get('latitude') ? this.get('latitude'): "",
        longitude: this.get('longitude') ? this.get('longitude'): "",
        category: this.get('category')
      };
      this.set('addNewListing', false);
      this.sendAction('save2', params);
    }
  }
});
