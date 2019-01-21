import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  FormInline,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  MDBBtn
} from "mdbreact";
import List from "./navBar/listItems";

class NavbarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      navitemList: [
        {
          item: "Home",
          linkTo: "/",
          isActive: true,
          drpdownList: []
        },
        {
          item: "Services",
          linkTo: "/services",
          isActive: false,
          drpdownList: [
            {
              name: "Facebook",
              link: "/services/facebook"
            },
            {
              name: "Youtube",
              link: "/services/youtube"
            },
            { name: "Instagram", link: "/services/instagram" }
          ]
        },
        {
          item: "Contact",
          linkTo: "/contacts",
          isActive: false,
          drpdownList: []
        },
        {
          item: "Autres",
          linkTo: "/autres",
          isActive: false,
          drpdownList: []
        }
      ],
      login: true
    };
  }
  toggleCollapse = () => this.setState({ isOpen: !this.state.isOpen });
  loginHundle() {
    this.props.callbackAppToService("clicked");
    this.setState({ login: !this.state.login });
  }

  render() {
    return (
      <div>
        <Navbar color="blue-gradient" dark className="m-3" expand="md">
          <NavbarBrand>
            <strong className="white-text">Navbar</strong>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleCollapse} />
          <Collapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <NavbarNav left>
              <List listItems={this.state.navitemList} />
            </NavbarNav>
          </Collapse>
        </Navbar>
        <br />
        <MDBBtn color="primary" onClick={this.loginHundle.bind(this)}>
          {this.state.login ? "Log in" : "Log out"}
        </MDBBtn>
      </div>
    );
  }
}

export default NavbarPage;
