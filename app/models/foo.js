import Fragment from 'ember-data-model-fragments/fragment';
import { attr } from '@ember-data/model';

export default Fragment.extend({
  'bankAccountId': attr('string'),
  'name': attr('string')
});
