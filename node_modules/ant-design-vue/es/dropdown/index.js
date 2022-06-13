import Dropdown from './dropdown';
import DropdownButton from './dropdown-button';
Dropdown.Button = DropdownButton;
/* istanbul ignore next */

Dropdown.install = function (app) {
  app.component(Dropdown.name, Dropdown);
  app.component(DropdownButton.name, DropdownButton);
  return app;
};

export { DropdownButton };
export default Dropdown;