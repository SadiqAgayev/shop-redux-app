import React from 'react'
import { useSelector } from 'react-redux'
import { Badge } from 'reactstrap'

const CategoryList = () => {
    const currentCategory = useSelector(state => state.ChangeCategoryReducer)
    console.log(currentCategory)
  return (
    <div>
        <Badge color='danger'>
            Category Name: {currentCategory.CategoryName}
        </Badge>
    </div>
  )
}

export default CategoryList