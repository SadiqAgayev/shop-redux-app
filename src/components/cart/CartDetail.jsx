import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Button, Table } from "reactstrap";
import * as CartAction from './../../redux/actions/CartAction'
import alertify from 'alertifyjs'

const CartDetail = () => {
    const cart = useSelector(state => state.CartReducer)
    const dispatch = useDispatch()

    const removeFromCart = (product) => {
        dispatch(CartAction.removeFromCart(product))
        alertify.error(`${product.productName} removed from cart`)
    }

  return (
    <div>
      <Badge color="warning" className="px-2 py-1 my-2 w-100 text-black">
        <h3>Cart Details</h3>
      </Badge>

      <Table dark hover responsive>
        <thead>
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Quantity Per Unit</th>
            <th>Unit Price</th>
            <th>Units In Stock</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((cartItem) => (
            <tr key={cartItem.product.id}>
              <th scope="row">{cartItem.product.id}</th>
              <td>{cartItem.product.productName}</td>
              <td>{cartItem.product.quantityPerUnit}</td>
              <td>{cartItem.product.unitPrice}</td>
              <td>{cartItem.product.unitsInStock}</td>
              <td>
                <Button color="danger" onClick={() => removeFromCart(cartItem.product)}>
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CartDetail;
