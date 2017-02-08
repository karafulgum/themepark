import Ember from 'ember';
import Themeparks from 'npm:themeparks';

export default Ember.Service.extend({
  disney: Themeparks.Parks.WaltDisneyWorldMagicKingdom(),
  universal: Themeparks.Parks.UniversalStudiosFlorida(),
});
