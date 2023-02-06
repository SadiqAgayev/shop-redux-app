import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as CartAction from "./../../redux/actions/CartAction";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  Badge,
} from "reactstrap";
import alertify from "alertifyjs";
import { Link } from "react-router-dom";

const CartSummary = () => {
  const cart = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();

  const removeFromCart = (product) => {
    dispatch(CartAction.removeFromCart(product));
    alertify.error(`${product.productName} removed from cart`);
  };

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
            <DropdownItem key={productItem.product.id}>
              <Badge
                color="danger"
                className="me-2"
                onClick={() => removeFromCart(productItem.product)}
              >
                X
              </Badge>
              {productItem.product.productName}
              <Badge color="success" className="ms-2">
                {productItem.quantity}
              </Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>
            <Link to="/cartDetail" style={{ textDecoration: "none" }}>
              Go To Cart
            </Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  };
  return <div>{cart.length > 0 ? renderSummary() : renderEmpty()}</div>;
};

export default CartSummary;
