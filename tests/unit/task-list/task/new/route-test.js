import { moduleFor, test } from 'ember-qunit';

moduleFor('route:task-list/task/new', 'Unit | Route | task list/task/new', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  var route = this.subject();
  assert.ok(route);
});
