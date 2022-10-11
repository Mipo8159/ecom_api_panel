import React, {useEffect, useState} from 'react'
import {useSearchParams} from 'react-router-dom'
import CategoryForm from '../components/create/CategoryForm'
import PostForm from '../components/create/PostForm'
import ProductForm from '../components/create/ProductForm'

const Create: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [type, setType] = useState<string>('product')
  const srchP = searchParams.get('type')

  useEffect(() => {
    setSearchParams({type})
  }, [type])

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <div className="d-flex mb-5 w-100 justify-content-center position-relative">
        <h1 className="text-uppercase fs-4">create</h1>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="form-select position-absolute"
          style={{width: '200px', right: 0}}
        >
          <option value="product">product</option>
          <option value="category">category</option>
          <option value="post">post</option>
        </select>
      </div>

      <div className="border border-secondary px-4 py-3 w-100">
        {type === 'product' ? (
          <ProductForm />
        ) : type === 'category' ? (
          <CategoryForm />
        ) : (
          <PostForm />
        )}
      </div>
    </div>
  )
}

export default Create
