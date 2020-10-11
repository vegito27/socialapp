import React from "react";
import PropTypes from "prop-types";

import NoImage from "../images/no-img.png";

import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";

const styles = {
  paper: {
    padding: 20
  },
  profile: {
    "& .image-wrapper": {
      textAlign: "center",
      position: "relative"
    },
    "& .profile-image": {
      width: 160,
      height: 160,
      objectFit: "cover",
      maxWidth: "90%",
      borderRadius: "50%"
    },
    "& .profile-details": {
      textAlign: "center",
      "& span, svg": {
        verticalAlign: "middle"
      },
      "& hr": {
        border: "none",
        margin: "0 0 10px 0"
      }
    }
  },
  handle: {
    height: 20,
    backgroundColor: "#00bcd4",
    width: 60,
    margin: "0px auto 7px auto"
  },
  fullLine: {
    height: 15,
    backgroundColor: "rgba(0,0,0,0.6)",
    width: "100%",
    marginBottom: 10
  },
  halfLine: {
    height: 15,
    backgroundColor: "rgba(0,0,0,0.6)",
    width: "50%",
    margin: "auto",
    marginBottom: 10
  }
};

const ProfileSkeleton = props => {
  const { classes } = props;

  return (
    <Paper className={classes.paper}>
      <div className={classes.profile}>
        <div className="image-wrapper">
          <img src={NoImage} alt="profile" className="profile-image" />
        </div>
        <hr />
        <div className="profile-details">
          <div className={classes.handle} />

          <div className={classes.fullLine} />
          <div className={classes.fullLine} />

          <div className={classes.halfLine} />
          <div className={classes.halfLine} />
          <div className={classes.halfLine} />
        </div>
      </div>
    </Paper>
  );
};

ProfileSkeleton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfileSkeleton);
