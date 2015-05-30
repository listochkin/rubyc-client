import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('task-list', { path: 'tasks' }, function() {
    this.route('task/new', { path: 'new' });
    this.route('task');
  });
});

export default Router;
