import React, { Component } from "react";
import { graphql } from "react-apollo";

import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery
} from "../../queries/queries";

import compose from "lodash.flowright";

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      genre: "",
      authorId: ""
    };
  }
  displayAuthors() {
    //console.log(this.props);
    var data = this.props.getAuthorsQuery;
    if (data.loading) {
      return <option disabled>Loading authors</option>;
    } else {
      return data.getAuthors.map(author => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  }

  render() {
    return (
      <form
        id="add-book"
        onSubmit={e => {
          //console.log(this);
          e.preventDefault();
          //console.log("state", this.state);
          this.props.addBookMutation({
            variables: {
              name: this.state.name,
              genre: this.state.genre,
              authorId: this.state.authorId
            },
            refetchQueries: [{ query: getBooksQuery }]
          });
        }}
      >
        <div className="field">
          <label>Book name:</label>
          <input
            type="text"
            onChange={e => this.setState({ name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input
            type="text"
            onChange={e => this.setState({ genre: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Author:</label>
          <select onChange={e => this.setState({ authorId: e.target.value })}>
            <option>Select author</option>
            {this.displayAuthors()}
          </select>
        </div>
        <button>+</button>
      </form>
    );
  }
}

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
