import gql from "graphql-tag";

const meQuery = gql`
query{
  me{
    id
    firstName
    lastName
    profilePicture
  }
}
`;

const meFullPayloadQuery = gql`
query{
  me{
    id
    profilePicture
    firstName
    lastName
    email
    phone
    role{
      id
      name
      permissions{
        id
        name
      }
    }
  }
}
`;

export {
  meQuery,
  meFullPayloadQuery
};