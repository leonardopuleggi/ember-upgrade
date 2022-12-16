import Fragment from 'ember-data-model-fragments/fragment';
import { attr } from '@ember-data/model';
import DS from 'ember-data';

export default Fragment.extend({
  'bankAccountId': attr('string'),
  'name': attr('string'),
  'partyId': DS.attr('number'),
});
