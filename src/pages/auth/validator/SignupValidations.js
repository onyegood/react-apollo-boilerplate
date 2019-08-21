import * as Yup from "yup";

export const SignupValidations = () => {
  return (
    Yup.object().shape({
      email: Yup.string().email("Invalid email, please provide a valid email.").required("Email is required"),
      password: Yup.string().min(5, "Password must be at least 5 characters").required("Password is required"),
      firstName: Yup.string().max(255).required("First name is required"),
      lastName: Yup.string().max(255).required("Last name is required"),
      phone: Yup.number().required("Phone is required")
    })
  );
};