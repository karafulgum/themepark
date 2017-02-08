import Ember from 'ember';

export default Ember.Route.extend({
  park: Ember.inject.service('Themeparks'),

  model() {
    return this.get('park').disney
      .then(res => res.json());
  }
});
