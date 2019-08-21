import gql from "graphql-tag";

const loginMutation = gql`
  mutation($data: LoginUserInput!){
    login(data: $data)
    {
      error{
        field
        message
      }
     payload{
        user{
        id
      }
      token
      }
    }
  }
`;

const checkTokenMutation = gql`
  mutation($token: String!){
    refreshToken(token: $token)
  }
`;

const forgotPasswordMutation = gql`
  mutation($data: ForgotPasswordInput!){
    forgotPassword(data: $data)
    {
      id
    }
  }
`;

const resetPasswordMutation = gql`
  mutation($data: ResetPasswordInput!){
    resetPassword(data: $data)
    {
      id
    }
  }
`;

const createUserMutation = gql`
  mutation($data: CreateUserInput!){
    createUser(data: $data)
    {
      user{
        id
      }
    }
  }
`;
export {
  loginMutation,
  forgotPasswordMutation,
  resetPasswordMutation,
  createUserMutation,
  checkTokenMutation
};