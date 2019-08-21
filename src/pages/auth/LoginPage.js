import React from "react";
import { withFormik, Form, Field } from "formik";
import "./css/Auth.scss";
import { graphql } from "react-apollo";
import { CustomInputComponent } from "../../helpers/CustomInputComponent";
import { LoginValidations } from "./validator/LoginValidations";
import { loginMutation } from "../../graphql/mutations/auth";
import AuthLinks from "./forms/AuthLinks";
import { checkLogin } from "../../util/checkLogin";

const LoginPage = ({ isSubmitting }) => {
  checkLogin();

  return (
    <>
      <div className="auth-main">
        <div className="container-fluid">
          <div className="col-md-4 m-auto pt-5">
            <div className="auth-box">
              <div className="card">
                <div className="card-body">
                  <h1 className="mt-4 mb-4 text-center">Login</h1>
                  <Form>
                    <Field name="email" type="email" placeholder="Email" component={CustomInputComponent} />
                    <Field name="password" type="password" placeholder="Password" component={CustomInputComponent} />
                    <div className="form-group mt-5">
                      <button disabled={isSubmitting} className="btn btn-alt btn-block">
                        Login
                      </button>
                    </div>
                  </Form>

                  <AuthLinks page="login" />
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
  mapPropsToValues({ email, password }) {
    return {
      email: email || "onyegood@yahoo.com",
      password: password || "@Password123"
    };
  },
  validationSchema: LoginValidations(),
  handleSubmit: async (values, { props, resetForm, setErrors, setSubmitting }) => {
    const variables = {
      data: {
        email: values.email,
        password: values.password
      }
    };


    const response = await props.mutate({ mutation: loginMutation, variables });
    const { error, payload } = response.data.login;

    if (payload) {
      localStorage.setItem("token", payload.token);
      props.history.push("/dashboard");
    } else {
      setErrors({ [error.field]: error.message });
    }
    // resetForm();
    setSubmitting(false);
  }
});

export default graphql(loginMutation)(FormikConnect(LoginPage));