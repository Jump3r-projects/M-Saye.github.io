import {
  NavbarToggler,
  Collapse,
  Navbar,
  Nav,
  NavbarBrand,
  NavItem
} from "reactstrap";
import { connect } from "react-redux";
import React, { Component, Fragment } from "react";
import RegisterModal from "./auth/RegisterModal";
import LoginModal from "./auth/LoginModal";
import Logout from "./auth/Logout";
import PropTypes from "prop-types";

class NaviBar extends Component {
  state = {
    isOpen: false
  };

  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <Fragment>
        <NavItem>
          <span className="navbar-text mr-3">
            <strong>{user ? `Welcome ${user.name}` : ""}</strong>
          </span>
        </NavItem>
        <NavItem>
          <Logout />
        </NavItem>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <NavItem>
          <RegisterModal />
        </NavItem>
        <NavItem>
          <LoginModal />
        </NavItem>
      </Fragment>
    );

    return (
      <Navbar color="dark" dark expand="sm">
        <NavbarBrand href="/">5/3/1</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {isAuthenticated ? authLinks : guestLinks}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(NaviBar);
