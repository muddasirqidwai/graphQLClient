import { gql } from "apollo-boost";

const getAuthorsQuery = gql`
  {
    getAuthors {
      name
      id
    }
  }
`;

const getBooksQuery = gql`
  {
    getBooks {
      name
      id
      genre
    }
  }
`;

const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: String!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

const getBookQuery = gql`
  query GetBook($id: ID!) {
    bookQuery(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

export { getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery };
