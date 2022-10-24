import React from 'react'
import CategoryCard from '../components/cards/CategoryCard'
import Loader from '../components/ui/Loading'
import {useGetCategoriesQuery} from '../store/category/category.api'

const CategoryList: React.FC = () => {
  const {isLoading, data: categories} = useGetCategoriesQuery()

  if (isLoading) {
    return (
      <div className="loader-div">
        <Loader />
      </div>
    )
  }
  return (
    <div className="row">
      {categories &&
        categories?.map((c) => <CategoryCard key={c._id} category={c} />)}
    </div>
  )
}

export default CategoryList
