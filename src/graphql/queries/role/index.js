import gql from "graphql-tag";

const rolesQuery = gql`
      query{
        roles{
          id
          name
        }
      }
`;

export { rolesQuery };