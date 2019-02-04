import React, {Fragment, PureComponent} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Prompt } from "react-router-dom";
import * as actions from "../../actions/authors";
import toastr from "toastr";
import TextInput from "../common/TextInput";

export class ManageAuthorPage extends PureComponent {
  state = {
    author: Object.assign({}, this.props.author),
    loading: false,
    errors: {firstName: "", lastName: ""},
    formIsValid: false,
    firstNameValid: false,
    lastNameValid: false,
    formUpdated: false
  };

  validateInput = author => {
    let errors = {};
    for (var field in author) {
      if (author.hasOwnProperty(field)) {
        switch (field) {
          case "firstName":
            if (author["firstName"].length > 0) {
              this.setState({firstNameValid: true});
            } else {
              errors["firstName"] =
                  "First Name should contain more than 1 character";
            }
            break;
          case "lastName":
            if (author["lastName"].length > 0) {
              this.setState({lastNameValid: true});
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
      this.setState({errors: errors});
    } else {
      this.setState({errors: {}, formIsValid: true});
    }
  };

  updateAuthorState = e => {
    const field = e.target.name;
    let author = Object.assign({}, this.state.author);
    author[field] = e.target.value;
    this.validateInput(author);
    this.setState({author: author});
  };

  saveAuthor = e => {
    e.preventDefault();
    this.setState({loading: true});
    this.validateInput(this.state.author);
    if (this.state.formIsValid) {
      this.setState({formUpdated: false});
      this.props.actions
          .saveAuthor(this.state.author)
          .then(() => this.redirect())
          .catch(error => {
            this.setState({loading: false});
            toastr.error(error);
          });
    }
  };

  redirect = () => {
    this.setState({loading: false});
    toastr.success("Author Saved.");
    this.props.history.push("/authors");
  };

  render() {
    return <Fragment>
      <Prompt
          key="prompt"
          when={this.state.formUpdated}
          message="The form isn't saved, are you sure you want to leave the page?"
      />
      <form>
        <h1>Manage Author</h1>
        <TextInput
            label="First Name"
            onChange={this.updateAuthorState}
            name="firstName"
            value={this.state.author.firstName}
            error={this.state.errors.firstName}
            placeholder="Enter First Name"/>
        <TextInput
            label="Last Name"
            onChange={this.updateAuthorState}
            name="lastName"
            value={this.state.author.lastName}
            error={this.state.errors.lastName}
            placeholder="Enter Course Category"/>
        <input
            type="submit"
            disabled={this.state.loading || !this.state.formIsValid}
            value={this.state.loading ? 'Saving...' : 'Save'}
            className="btn btn-primary"
            onClick={this.saveAuthor}/>
      </form>
    </Fragment>
  }
}

export const getAuthorById = (authors, id) => {
    const author = authors.filter(author => author.id === id);
    if (author.length) return author[0];
    return null;
};
export const mapStateToProps = (state, ownProps) => {
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
export const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageAuthorPage);
