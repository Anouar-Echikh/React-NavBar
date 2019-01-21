import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import NavbarPage from "./navBar";

class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { idService } = this.props;
    return (
      <div className="sercice-container">
        <h1>Liste des services => {idService}</h1>
      </div>
    );
  }
}

export default Service;
