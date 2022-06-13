import Form, { formProps } from './Form';
import FormItem, { formItemProps } from './FormItem';
import useForm from './useForm';
/* istanbul ignore next */

Form.install = function (app) {
  app.component(Form.name, Form);
  app.component(Form.Item.name, Form.Item);
  return app;
};

export { FormItem, formItemProps, formProps, useForm };
export default Form;