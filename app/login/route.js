import Ember from 'ember';
import UnauthenticatedRouteMixin from 'simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  actions: {
    authenticate (identification, password) {
      return this.get('session').authenticate('simple-auth-authenticator:oauth2-password-grant', { identification, password });
    }
  }
});
