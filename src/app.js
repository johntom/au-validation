
export class App {

  configureRouter(config, router) {
    config.title = 'Aurelia Babel SystemJS';
    config.map([
      {"route": ["", "simple-form"], "name": "simple-form", "moduleId": "./simple-form", "nav": true, "title": "Simple Form"},
      {"route": "registration-form", "name": "registration-form", "moduleId": "./registration-form", "nav": true, "title": "Registration Form"}
    ]);

    this.router = router;
  }
}
