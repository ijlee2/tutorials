import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Route | books/details', function(hooks) {
    setupTest(hooks);

    test('it exists', function(assert) {
        let route = this.owner.lookup('route:books/details');
        assert.ok(route);
    });
});