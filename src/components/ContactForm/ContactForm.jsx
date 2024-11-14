import css from "./ContactForm.module.css";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short, min 3 letters!")
    .max(50, "Too long, max 50 letters!")
    .required("This field is required!"),
  number: Yup.string()
    .min(3, "Too short, min 3 letters!")
    .max(50, "Too long, max 50 letters!")
    .required("This field is required!"),
});

export default function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const initialValues = {
    name: "",
    number: "",
    id: "",
  };

  const dispatch = useDispatch();

  const onAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <div className={css.formField}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id="nameFieldId" />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>
        <div className={css.formField}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field type="tel" name="number" id="numberFieldId" />
          <ErrorMessage name="number" component="span" className={css.error} />
        </div>
        <button type="submit" className={css.addBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
