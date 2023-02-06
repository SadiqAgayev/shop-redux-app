import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Button, Table } from "reactstrap";
import * as ProductActions from "./../../redux/actions/ProductActions";
import * as CartAction from "./../../redux/actions/CartAction";
import alertify from "alertifyjs";

const ProductList = () => {
  const products = useSelector((state) => state.ProductListReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ProductActions.getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addToCart = (product) => {
    dispatch(CartAction.addToCart({ product, quantity: 1 }));
    addToStorage(product);
    alertify.success(`${product.productName} added to cart`);
  };

  const addToStorage = (newCartItem) => {
    let cartItem;

    if (localStorage.getItem("cartItem") === null) {
      cartItem = [];
    } else {
      cartItem = JSON.parse(localStorage.getItem("cartItem"));
    }
    
    let addedItem = cartItem.find(ci => ci.id === newCartItem.id)
    if(addedItem) {
      cartItem = cartItem.map(item => {
        if (item.id === addedItem.id) {
          return { ...addedItem, quantity: addedItem.quantity + 1 }
        }
        return item
      })
    }  else {
      cartItem = [...cartItem, {...newCartItem,quantity:1}]
    }

    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  };

  return (
    <div>
      <Badge color="primary" className="px-2 py-1 my-2 w-100">
        <h3>Products</h3>
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
          {products.map((product) => (
            <tr key={product.id}>
              <th scope="row">{product.id}</th>
              <td>{product.productName}</td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitPrice}</td>
              <td>{product.unitsInStock}</td>
              <td>
                <Button color="success" onClick={() => addToCart(product)}>
                  Add
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
