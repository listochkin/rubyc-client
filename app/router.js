import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('task-list', { path: 'tasks' }, function() {
    this.resource('task/new', { path: 'new' });
    this.resource('task');
  });
});

export default Router;
