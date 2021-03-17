import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service userAuth;
  model() {
    return {};
  }

  @action login(user) {
    this.store
      .query('employee', {
        filter: {
          email: user.email,
        },
      }) // SELECT * FROM employee where email = user.email;
      .then((employees) => {
        if (employees.length) {
          let connected = employees.firstObject;
          if (connected.password && connected.password === user.password) {
            this.userAuth.login(connected);
            this.transitionTo('board');
          }
        }
      });
  }
}
