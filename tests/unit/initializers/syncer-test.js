import Ember from 'ember';
import SyncerInitializer from 'ember-flexberry-data/initializers/syncer';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | syncer', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  SyncerInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
