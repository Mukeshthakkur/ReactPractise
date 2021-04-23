import React, { Component } from "react";

class Like extends React.Component {
  render() {
    let classes = "fas fa-heart";
    if (!this.props.Liked) classes= "far fa-heart";

    return (
      <i
        onClick={this.props.onClick}
        style={{ cursor: "pointer" }}
        className={classes}
      ></i>
    );
  }
}

export default Like;
