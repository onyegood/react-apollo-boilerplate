import * as Yup from "yup";

export const ForgotPasswordValidations = () => {
  return (
    Yup.object().shape({
      email: Yup.string().email("Invalid email, please provide a valid email.").required("Email is required")
    })
  );
};