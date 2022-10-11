import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import CategoryDetails from '../pages/CategoryDetails'
import CategoryList from '../pages/CategoryList'
import Create from '../pages/Create'
import Home from '../pages/Home'
import PostDetails from '../pages/PostDetails'
import PostList from '../pages/PostList'
import ProductDetails from '../pages/ProductDetails'
import ProductList from '../pages/ProductList'

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />

      <Route path="products">
        <Route index element={<ProductList />} />
        <Route path=":id" element={<ProductDetails />} />
      </Route>

      <Route path="categories">
        <Route index element={<CategoryList />} />
        <Route path=":id" element={<CategoryDetails />} />
      </Route>

      <Route path="posts">
        <Route index element={<PostList />} />
        <Route path=":id" element={<PostDetails />} />
      </Route>

      <Route path="*" element={<Navigate replace to="/error" />} />
    </Routes>
  )
}

export default AppRouter
