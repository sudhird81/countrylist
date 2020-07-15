import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from "react-router-dom";
import { push } from "react-router-redirect";

class Header extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}



redirectLink = ()=>{
  push("/add");
}

redirectLinkHome = ()=>{
  push("/");
}
render() {
  return (
    <Router>
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text"  onClick={this.redirectLinkHome} >Country List & Search</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
            {/* <MDBNavItem>
              <MDBNavLink to="/add" onClick={this.redirectLink}>Add Note</MDBNavLink>
            </MDBNavItem> */}
              {/* <Link to="/add">sss  </Link> */}
            </MDBNavItem>
            {/* <MDBNavItem>
              <MDBNavLink to="/">Edit Note</MDBNavLink>
            </MDBNavItem> */}
            <MDBNavItem>
            </MDBNavItem>
          </MDBNavbarNav>
        
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default Header;