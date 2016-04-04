import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('category', params.category_id);
  },
  actions: {
    save3(params) {
      var newListing = this.store.createRecord('listing', params);
      var category = params.category;
      category.get('listings').addObject(newListing);
      newListing.save().then(function() {
        return category.save();
      });
      this.transitionTo('category');
      }
    }
  });
  //
  // model() {
  //   return Ember.RSVP.hash({
  //     categories: this.store.findAll('category'),
  //     listings: this.store.findAll('listing')
  //   });
