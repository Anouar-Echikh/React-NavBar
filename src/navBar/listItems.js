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
  DropdownItem
} from "mdbreact";
import { BrowserRouter, Route, link } from "react-router-dom";
import Contact from "../contacts.js";
class List extends Component {
  constructor(props) {
    super(props);
  }
  isActive = b => {
    if (b) return "active";
    else return "";
  };
  mapping = arr => {
    return arr.map((Ditem, k) => (
      <DropdownItem href={Ditem.link} key={k}>
        {Ditem.name}
      </DropdownItem>
    ));
  };
  drpList = obj => {
    if (obj.drpdownList.length != 0) {
      return (
        <Dropdown>
          <DropdownToggle nav caret>
            <div className="d-none d-md-inline">{obj.item}</div>
          </DropdownToggle>
          <DropdownMenu right>{this.mapping(obj.drpdownList)}</DropdownMenu>
        </Dropdown>
      );
    } else {
      return <NavLink to={obj.linkTo}>{obj.item}</NavLink>;
    }
  };

  render() {
    return this.props.listItems.map((item, i) => (
      <NavItem className={this.isActive(item.isActive)} key={i}>
        {this.drpList(item)}
      </NavItem>
    ));
  }
}

export default List;
