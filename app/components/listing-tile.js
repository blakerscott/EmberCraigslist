import Ember from 'ember';

export default Ember.Component.extend({

    sortBy: ['dateAdded:desc'],
    sortedListings: Ember.computed.sort('category.listings', 'sortBy'),
});
