import css from "./RegistrationForm.module.css";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import toast from "react-hot-toast";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short, min 3 letters!")
    .max(20, "Too long, max 50 letters!")
    .required("This field is required!"),
  email: Yup.string()
    .email("Invalid email address")
    .required("This field is required!"),
  password: Yup.string()
    .min(8, "Too short, min 8 symbols!")
    .required("This field is required!"),
});

export default function RegistrationForm() {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success("You are registered! Please log in.");
      })
      .catch(() => {
        toast.error("Error, please try again!");
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={RegisterSchema}
    >
      <Form className={css.form}>
        <div className={css.formField}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            type="text"
            name="name"
            id="nameFieldId"
            placeholder="Petryk"
          />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>
        <div className={css.formField}>
          <label htmlFor={emailFieldId}>Email</label>
          <Field
            type="email"
            name="email"
            id="emailFieldId"
            placeholder="email@example.com"
          />
          <ErrorMessage name="email" component="span" className={css.error} />
        </div>
        <div className={css.formField}>
          <label htmlFor={passwordFieldId}>Password</label>
          <Field
            type="password"
            name="password"
            id="passwordFieldId"
            placeholder="Enter your password"
          />
          <ErrorMessage
            name="password"
            component="span"
            className={css.error}
          />
        </div>
        <button type="submit" className={css.signUpBtn}>
          Sign Up
        </button>
      </Form>
    </Formik>
  );
}
