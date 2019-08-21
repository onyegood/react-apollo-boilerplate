import React from "react";
import { withFormik, Form, Field } from "formik";
import "./css/Auth.scss";
import { graphql } from "react-apollo";
import { CustomInputComponent } from "../../helpers/CustomInputComponent";
import { forgotPasswordMutation } from "../../graphql/mutations/auth";
import { ForgotPasswordValidations } from "./validator/ForgotPasswordValidations";
import AuthLinks from "./forms/AuthLinks";
import { checkLogin } from "../../util/checkLogin";

const ForgotPasswordPage = ({ isSubmitting }) => {
  checkLogin();
  return (
    <>
      <div className="auth-main">
        <div className="container-fluid">
          <div className="col-md-4 m-auto pt-5">
            <div className="auth-box">
              <div className="card">
                <div className="card-body">
                  <h1 className="mt-4 text-center">Forgot Password</h1>
                  <p className="mb-4 text-center">Please enter your email address</p>
                  <Form>
                    <Field name="email" type="email" placeholder="Email" component={CustomInputComponent} />
                    <div className="form-group mt-5">
                      <button disabled={isSubmitting} className="btn btn-alt btn-block">
                        Submit
                      </button>
                    </div>
                  </Form>

                  <AuthLinks page="forgot-password" />
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
  mapPropsToValues({ email }) {
    return {
      email: email || ""
    };
  },
  validationSchema: ForgotPasswordValidations(),
  handleSubmit: async (values, { props, resetForm, setErrors, setSubmitting }) => {
    try {
      const variables = {
        data: {
          email: values.email
        }
      };

      await props.mutate({ mutation: forgotPasswordMutation, variables });
      props.history.push("/login");
      resetForm();
    } catch (error) {
      setErrors({
        email: "Please confirm, your email is correct"
      });
    }
    setSubmitting(false);
  }
});

export default graphql(forgotPasswordMutation)(FormikConnect(ForgotPasswordPage));