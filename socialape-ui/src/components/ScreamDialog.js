import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CommentForm from './CommentForm'
import dayjs from "dayjs";
import MyButton from "../util/MyButton";
import Comments from './Comments'
import withStyles from "@material-ui/core/styles/withStyles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import CloseIcon from "@material-ui/icons/Close";
import UnfoldMore from "@material-ui/icons/UnfoldMore";
import ChatIcon from "@material-ui/icons/Chat";

import { connect } from "react-redux";
import { getScream, clearErrors } from "../redux/actions/dataActions";

const styles = {
  invisibleSeparator: {
    border: "none",
    margin: 4
  },
  visibleSeparator: {
    width: "100%",
    borderBottom: "1px solid rgba(0,0,0,0.1)"
  },
  profileImage: {
    maxWidth: 200,
    height: 200,
    objectFit: "cover",
    borderRadius: "50%"
  },
  dialogContent: {
    paddding: 20
  },
  closeButton: {
    position: "absolute",
    left: "90%"
  },
  expandButton: {
    position: "absolute",
    left: "60%"
  },
  spinnerDiv: {
    textAlign: "center",
    marginTop: 50,
    marginBottom: 50
  }
};
class ScreamDialog extends Component {
  state = {
    open: false,
    oldPath: "",
    newPath: ""
  };

  componentDidMount() {
    if (this.props.openDialog) {
      this.handleOpen();
    }
  }

  handleOpen = () => {
    let oldPath = window.location.pathname;
    const { userHandle, screamId } = this.props;
    const newPath = `/user/${userHandle}/scream/${screamId}`;

    if (oldPath === newPath) {
      oldPath = `/user/${userHandle}`;
    }
    window.history.pushState(null, null, newPath);

    this.setState({ open: true, oldPath, newPath });
    this.props.getScream(this.props.screamId);
  };

  handleClose = () => {
    window.history.pushState(null, null, this.state.oldPath);
    this.setState({ open: false });
   
  };

  render() {
    const {
      classes,
      scream: {
        scream,
        createdAt,
        userHandle,
        userImage,
        screamId,
        likeCount,
        commentCount,
        comments
      },
      UI: { loading }
    } = this.props;

   
    return (
      <Fragment>
        <MyButton
          onClick={this.handleOpen}
          tip="expand scream"
          tipClassName={classes.expandButton}
        >
          <UnfoldMore color="primary" />
        </MyButton>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <MyButton
            tip="close"
            onClick={this.handleClose}
            tipClassName={classes.closeButton}
          >
            <CloseIcon />
          </MyButton>
          <DialogContent className={classes.dialogContent}>
            
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

ScreamDialog.propTypes = {
  clearErrors:PropTypes.func.isRequired, 
  getScream: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
  scream: PropTypes.object.isRequired,
  screamId: PropTypes.string.isRequired,
  userHandle: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  scream: state.data.scream,
  UI: state.UI
});
const mapActionsToProps = {
  getScream,
  clearErrors
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(ScreamDialog));