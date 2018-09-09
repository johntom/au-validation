import {inject} from 'aurelia-dependency-injection';
import {
  ValidationControllerFactory,
  ValidationController,
  ValidationRules,
  validateTrigger
} from 'aurelia-validation';
import {BootstrapFormRenderer} from './bootstrap-form-renderer';

@inject(ValidationControllerFactory)
export class RegistrationForm {
  firstName = '';
  lastName = '';
  email = '';
 
  controller = null;
  user = new User();

  constructor(controllerFactory) {
    this.controller = controllerFactory.createForCurrentScope();
    this.controller.addRenderer(new BootstrapFormRenderer());
      this.controller.addObject(this);
    this.controller.addObject(this.user);
  }
  
  submit() {
    this.controller.validate();
  }
}
export class User {
  fname;
  lname;
}
ValidationRules
  .ensure(a => a.firstName).required()
  .ensure(a => a.lastName).required()
  .ensure(a => a.email).required().email()
  .on(RegistrationForm);

  // ValidationRules
  // .ensure(a => a.address).required()
  // .on(App);
