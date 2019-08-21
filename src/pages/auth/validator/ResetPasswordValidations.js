import * as Yup from "yup";

export const ResetPasswordValidations = () => {
  return (
    Yup.object().shape({
      confirmPassword: Yup.string().required("Confirm password is required"),
      password: Yup.string().min(5, "Password must be at least 5 characters").required("Password is required")
    })
  );
};