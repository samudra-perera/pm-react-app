import { gql } from "@apollo/client";

const ADD_PROJECT = gql`
  mutation AddProject(
    $name: String!
    $description: String!
    $status: ProjectStatus!
    $clientID: ID!
  ) {
    addProject(
      name: $name
      description: $description
      status: $status
      clientID: $clientID
    ) {
      id
      name
      description
      status
      client {
        name
        email
        id
        phone
      }
    }
  }
`;

const DELETE_PROJECT = gql`
  mutation deleteProject($id: ID!) {
    deleteProject(id: $id) {
      id
    }
  }
`;

const UPDATE_PROJECT = gql`
  mutation updateProject(
    $id: ID!
    $name: String!
    $description: String!
    $status: ProjectStatusUpdate!
  ) {
    updateProject(
      id: $id
      name: $name
      description: $description
      status: $status
    ) {
      id
      name
      description
      status
      client {
        name
        email
        id
        phone
      }
    }
  }
`;

export { ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT };
