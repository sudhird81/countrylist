import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse} from "mdbreact";
function Header() {
  return (
    <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Country Search & List</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler/>
        <MDBCollapse id="navbarCollapse3" navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
    </MDBNavbar>
  );
}
export default Header;