import React from "react";
import { withFormik, Form, Field } from "formik";
import "./css/Auth.scss";
import { graphql } from "react-apollo";
import { CustomInputComponent } from "../../helpers/CustomInputComponent";
import { createUserMutation } from "../../graphql/mutations/auth";
import AuthLinks from "./forms/AuthLinks";
import { SignupValidations } from "./validator/SignupValidations";
import { checkLogin } from "../../util/checkLogin";

const SignupPage = ({ isSubmitting }) => {
  checkLogin();

  return (
    <>
      <div className="auth-main">
        <div className="container-fluid">
          <div className="col-md-4 m-auto pt-5">
            <div className="auth-box">
              <div className="card">
                <div className="card-body">
                  <h1 className="mt-4 mb-4 text-center">Signup</h1>
                  <Form>
                    <div className="row">
                      <div className="col-md-6">
                        <Field name="firstName" type="text" placeholder="First Name" component={CustomInputComponent} />
                      </div>
                      <div className="col-md-6">
                        <Field name="lastName" type="text" placeholder="Last Name" component={CustomInputComponent} />
                      </div>
                    </div>
                    <Field name="phone" type="text" placeholder="Phone Number" component={CustomInputComponent} />
                    <Field name="email" type="text" placeholder="Email" component={CustomInputComponent} />
                    <Field name="password" type="password" placeholder="Password" component={CustomInputComponent} />
                    <div className="form-group mt-5">
                      <button disabled={isSubmitting} className="btn btn-alt btn-block">
                        Submit
                      </button>
                    </div>
                  </Form>

                  <AuthLinks page="signup" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const FormikConnect = withFormik({
  mapPropsToValues({ email, password, firstName, lastName, phone }) {
    return {
      email: email || "",
      password: password || "",
      firstName: firstName || "",
      lastName: lastName || "",
      phone: phone || "",
    };
  },
  validationSchema: SignupValidations(),
  handleSubmit: async (values, { props, resetForm, setErrors, setSubmitting }) => {
    try {
      const variables = {
        data: {
          email: values.email,
          password: values.password,
          firstName: values.firstName,
          LastName: values.LastName,
          phone: values.phone
        }
      };

      const response = await props.mutate({ mutation: createUserMutation, variables });
      localStorage.setItem("token", response.data.signup.token);
      props.history.push("/dashboard");
      resetForm();
    } catch (error) {
      setErrors({
        email: "Please confirm, your email is correct",
        password: "Please confirm your password is correct"
      });
    }
    setSubmitting(false);
  }
});

export default graphql(createUserMutation)(FormikConnect(SignupPage));