import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBookQuery } from "../../queries/queries";

class BookDetails extends Component {
  displayBookDetails() {
    //console.log(this.props.data);
    const { bookQuery } = this.props.data;
    if (bookQuery) {
      return (
        <div>
          <h2>{bookQuery.name}</h2>
          <p>{bookQuery.genre}</p>
          <p>{bookQuery.author.name}</p>
          <p>All books by this author:</p>
          <ul className="other-books">
            {bookQuery.author.books.map(item => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return <div>No book selected...</div>;
    }
  }
  render() {
    return <div id="book-details">{this.displayBookDetails()}</div>;
  }
}

export default graphql(getBookQuery, {
  options: props => {
    return {
      variables: {
        id: props.bookId
      }
    };
  }
})(BookDetails);
