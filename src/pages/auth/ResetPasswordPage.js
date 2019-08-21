import React from "react";
import { withFormik, Form, Field } from "formik";
import "./css/Auth.scss";
import { graphql } from "react-apollo";
import { CustomInputComponent } from "../../helpers/CustomInputComponent";
import { ResetPasswordValidations } from "./validator/ResetPasswordValidations";
import { resetPasswordMutation } from "../../graphql/mutations/auth";
import AuthLinks from "./forms/AuthLinks";
import { checkLogin } from "../../util/checkLogin";

const ResetPasswordPage = ({ isSubmitting }) => {
  checkLogin();

  return (
    <>
      <div className="auth-main">
        <div className="container-fluid">
          <div className="col-md-4 m-auto pt-5">
            <div className="auth-box">
              <div className="card">
                <div className="card-body">
                  <h1 className="mt-4 mb-4 text-center">Reset Password</h1>
                  <Form>

                    <Field name="password" type="password" placeholder="Password" component={CustomInputComponent} />
                    <Field name="confirmPassword" type="password" placeholder="Confirm Password" component={CustomInputComponent} />
                    <div className="form-group mt-5">
                      <button disabled={isSubmitting} className="btn btn-alt btn-block">
                        Submit
                      </button>
                    </div>
                  </Form>

                  <AuthLinks page="reset-password" />
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
  mapPropsToValues({ confirmPassword, password }) {
    return {
      confirmPassword: confirmPassword || "",
      password: password || ""
    };
  },
  validationSchema: ResetPasswordValidations(),
  handleSubmit: async (values, { props, resetForm, setErrors, setSubmitting }) => {
    if (values.confirmPassword !== values.password) {
      setErrors({
        confirmPassword: "Password not match"
      });
      setSubmitting(false);
      return;
    }
    try {

      const variables = {
        data: {
          passwordToken: props.match.params.token,
          password: values.password
        }
      };

      await props.mutate({ mutation: resetPasswordMutation, variables });
      props.history.push("/login");
      resetForm();
    } catch (error) {
      // setErrors({
      //   confirmPassword: error.message
      // });
    }
    setSubmitting(false);
  }
});

export default graphql(resetPasswordMutation)(FormikConnect(ResetPasswordPage));