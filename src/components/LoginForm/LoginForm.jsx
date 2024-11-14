import css from "./LoginForm.module.css";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import toast from "react-hot-toast";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("This field is required!"),
  password: Yup.string()
    .min(8, "Too short, min 8 symbols!")
    .required("This field is required!"),
});

export default function RegistrationForm() {
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const initialValues = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values))
      .unwrap()
      .then(() => {
        toast.success("You are logged in!");
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
      validationSchema={LoginSchema}
    >
      <Form className={css.form}>
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
        <button type="submit" className={css.logInBtn}>
          Log In
        </button>
      </Form>
    </Formik>
  );
}
