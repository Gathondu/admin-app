import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { Prompt } from "react-router-dom";
import * as actions from "../../actions/authors";
import AuthorForm from "./AuthorForm";
import toastr from "toastr";

class ManageAuthorPage extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired
  };
  state = {
    author: Object.assign({}, this.props.author),
    loading: false,
    errors: { firstName: "", lastName: "" },
    formIsValid: false,
    firstNameValid: false,
    lastNameValid: false,
    formUpdated: false
  };
  componentWillReceiveProps(nextProps) {
    if (this.props.author.id !== nextProps.author.id) {
      this.setState({ author: Object.assign({}, nextProps.author) });
    }
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (this.state.author !== nextState.author) {
      this.setState({ formUpdated: true });
    }
    return true;
  }

  validateInput = author => {
    let errors = {};
    for (var field in author) {
      if (author.hasOwnProperty(field)) {
        switch (field) {
          case "firstName":
            if (author["firstName"].length > 0) {
              this.setState({ firstNameValid: true });
            } else {
              errors["firstName"] =
                "First Name should contain more than 1 character";
            }
            break;
          case "lastName":
            if (author["lastName"].length > 0) {
              this.setState({ lastNameValid: true });
            } else {
              errors["lastName"] =
                "Last Name should contain more than 1 character";
            }
            break;
          default:
            break;
        }
      }
    }
    if (Object.keys(errors).length > 0) {
      this.setState({ errors: errors });
    } else {
      this.setState({ errors: {}, formIsValid: true });
    }
  };

  updateAuthorState = e => {
    const field = e.target.name;
    let author = Object.assign({}, this.state.author);
    author[field] = e.target.value;
    this.validateInput(author);
    this.setState({ author: author });
  };

  saveAuthor = e => {
    e.preventDefault();
    this.setState({ loading: true });
    this.validateInput(this.state.author);
    if (this.state.formIsValid) {
      this.setState({ formUpdated: false });
      this.props.actions
        .saveAuthor(this.state.author)
        .then(() => this.redirect())
        .catch(error => {
          this.setState({ loading: false });
          toastr.error(error);
        });
    }
  };

  redirect = () => {
    this.setState({ loading: false });
    toastr.success("Author Saved.");
    this.props.history.push("/authors");
  };

  render() {
    return [
      <Prompt
        key="prompt"
        when={this.state.formUpdated}
        message="The form isn't saved, are you sure you want to leave the page?"
      />,
      <AuthorForm
        key="form"
        author={this.state.author}
        errors={this.state.errors}
        onChange={this.updateAuthorState}
        onSave={this.saveAuthor}
        loading={this.state.loading}
        formIsValid={this.state.formIsValid}
      />
    ];
  }
}

const getAuthorById = (authors, id) => {
    const author = authors.filter(author => author.id === id);
    if (author.length) return author[0];
    return null;
};
const mapStateToProps = (state, ownProps) => {
    const authorId = ownProps.match.params.id;
    let author = {
        firstName: "",
        lastName: ""
    };
    if (authorId && state.authors.length > 0) {
        author = getAuthorById(state.authors, authorId);
    }
    return {
        author: author
    };
};
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageAuthorPage);
