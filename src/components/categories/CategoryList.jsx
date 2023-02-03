import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, ListGroup, ListGroupItem } from "reactstrap";
import * as CategoryActions from "./../../redux/actions/CategoryActions";
import * as ProductActions from "./../../redux/actions/ProductActions";

const CategoryList = () => {
  const currentCategory = useSelector((state) => state.ChangeCategoryReducer);
  const categories = useSelector((state) => state.CategoryListReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CategoryActions.getCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selected = (category) => {
    dispatch(CategoryActions.changeCategory(category));
    dispatch(ProductActions.getProducts(category.id));
  };
  return (
    <div>
      <Badge color="danger" className="px-2 py-1 my-2 w-100">
        <h3>Category Name: {currentCategory.CategoryName}</h3>
      </Badge>
      {console.log(categories)}
      <ListGroup>
        {categories.map((category) => (
          <ListGroupItem
            key={category.id}
            active={category.id === currentCategory.id}
            onClick={() => selected(category)}
          >
            {category.categoryName}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default CategoryList;
