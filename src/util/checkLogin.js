import history from "../history";

export const checkLogin = () => {
  const token = !!localStorage.getItem("token");
  if (token) {
    history.push("/");
  }
};