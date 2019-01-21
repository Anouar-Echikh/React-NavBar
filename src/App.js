import React, { Component } from "react";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import NavbarPage from "./navBar";
import Contact from "./contacts";
import Service from "./services";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  getClick = str => {
    if (str === "clicked")
      this.setState(prevState => ({
        isLoggedIn: !prevState.isLoggedIn
      }));
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route
            exact
            path=""
            render={() => (
              <NavbarPage callbackAppToService={str => this.getClick(str)} />
            )}
          />
          <Route exact path="/contacts" render={() => <Contact />} />
          <Route
            exact
            path="/services/:idService"
            render={({ match }) =>
              !this.state.isLoggedIn ? (
                <Service idService={match.params.idService} />
              ) : (
                <Redirect to="/contacts" />
              )
            }
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
