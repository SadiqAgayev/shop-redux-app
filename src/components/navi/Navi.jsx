import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import CartSummary from "../cart/CartSummary";

function Navi(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        {...args}
        color="dark"
        light={true}
        dark={true}
        expand="sm"
        style={{ padding: "5px 10%" }}
      >
        <NavbarBrand href="/">AghayevShop</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <CartSummary />
            <NavItem>
              <NavLink href="https://github.com/SadiqAgayev" target="_blank">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;
