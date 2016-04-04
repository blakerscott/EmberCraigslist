import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    image: DS.attr(),
    price: DS.attr(),
    dateAdded: DS.attr(),
    location: DS.attr(),
    description: DS.attr(),
    contactModel: DS.attr(),
    contactEmail: DS.attr(),
    latitude: DS.attr(),
    longitude: DS.attr()
});
