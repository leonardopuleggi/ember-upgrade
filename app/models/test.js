import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default Model.extend({
    'investmentDistParametersId': attr('string'),
    'distributionTypeCode': attr('string', {defaultValue: 'N'}),
    'nextBooksCloseDatetime': attr('date'),
    'distributionFrequencyCode': attr('string'),
    'fixedDistribAllowedFlag': attr('boolean'),
    'minimumDrawdownAmount': attr('bignumber'),
    'fixedDistribWarningLevel1': attr('bignumber'),
    'fixedDistribWarningLevel2': attr('bignumber'),
    'chequeBankAccount': fragment('fragment-bank-account', {defaultValue: () => {return {bankAccountId: null};}})
})
