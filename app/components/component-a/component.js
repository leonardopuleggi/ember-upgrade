import Component from '@ember/component';
import numeral from 'numeral';
import 'numeral/locales/en-gb';
import moment from 'moment';
// This import is necessary to force Ember-auto-import to bring in timezone. Do not remove
import 'moment-timezone';
import { inject as service } from '@ember/service';

export default Component.extend({
    store: service(),
    i18n: service('intl'),

    init() {
        this._super(...arguments);
        console.log("Leo");

        //test numer
        let number = numeral.localeData();

        // test moment
        moment(Date.now()).tz(moment.tz.guess()).toJSON();

        // test model
        let fragment = this.store.createFragment('foo', {
            'bankAccountId': 1,
            'name': 'test'
        });

        let t = this.i18n.t('test');
    }
});
