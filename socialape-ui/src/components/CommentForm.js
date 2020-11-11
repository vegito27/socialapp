import React, { Component } from "react";
import PropTypes from "prop-types";

import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { connect } from "react-redux";
import { submitComment } from "../redux/actions/dataActions";

const styles = {
  visibleSeparator: {
    width: "100%",
    borderBottom: "1px solid rgba(0,0,0,0.1)"
  },
  textField: {
    margin: "10px auto 10px auto"
  },
  button: {
    marginTop: 10,
    position: "relative"
  }
};

class CommentForm extends Component {
  

  state = {
    body: "",
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.setState({ body: "", errors: {} });
    }
  }
  handleChange = event => {

    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.submitComment(this.props.screamId, { body: this.state.body });
  };
  render() {
    const { classes, authenticated } = this.props;
    const errors = this.state.errors;

    const commentFormMarkup = authenticated ? (
      <Grid item sm={12} style={{ textAlign: "center" }}>

        <form onSubmit={this.handleSubmit}>
          
          <TextField
            name="body"
            label="Comment on scream"
            type="text"
            error={errors.comment ? true : false}
            helperText={errors.comment}
            value={this.state.scream}
            onChange={this.handleChange}
            fullWidth
            className={classes.textField}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            submit
          </Button>
        </form>
        <hr className={classes.visibleSeparator} />
      </Grid>
    ) : null;
    return commentFormMarkup;
  }
}

const mapStateToProps = state => ({
  UI: state.UI,
  authenticated: state.user.authenticated
});

CommentForm.propTypes = {
  screamId: PropTypes.string.isRequired,
  submitComment: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  authenticated: PropTypes.bool.isRequired
};

export default connect(mapStateToProps,{ submitComment })(withStyles(styles)(CommentForm));










