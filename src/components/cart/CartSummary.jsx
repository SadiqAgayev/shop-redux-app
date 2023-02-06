import React from "react";
import { useSelector } from "react-redux";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  Badge,
} from "reactstrap";

const CartSummary = () => {
  const cart = useSelector((state) => state.CartReducer);
  console.log(cart);

  const renderEmpty = () => {
    return (
      <NavItem>
        <NavLink>Empty Cart</NavLink>
      </NavItem>
    );
  };

  const renderSummary = () => {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your-Cart-{cart.length}
        </DropdownToggle>
        <DropdownMenu>
          {cart.map((productItem) => (
            <DropdownItem>
              <Badge color="danger" className="me-2">
                X
              </Badge>
              {productItem.product.productName}
              <Badge color="success" className="ms-2">
                {productItem.quantity}
              </Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>Go To Cart</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  };
  return <div>{cart.length > 0 ? renderSummary() : renderEmpty()}</div>;
};

export default CartSummary;
