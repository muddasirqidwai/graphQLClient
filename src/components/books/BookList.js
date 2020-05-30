import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../../queries/queries";
import BookDetails from "./BookDetails";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedID: null
    };
  }

  displayBooks() {
    var data = this.props.data;
    if (data.loading) {
      return <div>Loading books...</div>;
    } else {
      return data?.getBooks?.map(book => {
        return (
          <li
            key={book.id}
            onClick={e => {
              this.setState({ selectedID: book.id });
            }}
          >
            {book.name}
          </li>
        );
      });
    }
  }
  render() {
    //console.log(this.props);
    return (
      <div>
        <ul id="book-list">{this.displayBooks()}</ul>
        <BookDetails bookId={this.state.selectedID} />
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
