import React from "react";
import Link from "next/link";

import "./nav.scss";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from "reactstrap";

class Top extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" style={{ padding: "0px" }}>
          <Container>
            <NavbarToggler
              onClick={this.toggle}
              className="mr-2"
              style={{ display: "block" }}
            />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav>
                    <div className="d-flex flex-row bd-highlight">
                      <div className="p-2 bd-highlight">
                        {" "}
                        <img
                          className="nav__img"
                          src="https://cdn.shopify.com/s/files/1/0891/8314/products/Poker_Face_Die_C_4fedc859b8b66_1024x1024.jpeg?v=1459067191"
                        />
                      </div>
                      <div className="p-2 bd-highlight">anonymous</div>
                    </div>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Settings</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Log out</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Top;
