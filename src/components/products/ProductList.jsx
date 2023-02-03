import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Button, Table } from "reactstrap";
import * as ProductActions from "./../../redux/actions/ProductActions";

const ProductList = () => {
  const products = useSelector((state) => state.ProductListReducer);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(ProductActions.getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div>
      <Badge color="primary" className="px-2 py-1 my-2 w-100">
        <h3>Product</h3>
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
                <Button color="danger">Add</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
