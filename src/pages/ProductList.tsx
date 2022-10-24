import React, {Fragment, useState} from 'react'
import ProductCard from '../components/cards/ProductCard'
import Loader from '../components/ui/Loading'
import Pagination from '../components/ui/Pagination'
import {useGetProductsQuery} from '../store/product/product.api'

const ProductList: React.FC = () => {
  const [page, setPage] = useState<number>(1)
  const {isLoading, data: products} = useGetProductsQuery({page, limit: 20})

  if (isLoading) {
    return (
      <div className="loader-div">
        <Loader />
      </div>
    )
  }

  return (
    <Fragment>
      <div className="row">
        {products &&
          products?.products.map((p) => <ProductCard key={p._id} product={p} />)}
      </div>

      <div className="d-flex justify-content-center">
        <Pagination
          page={products?.meta.page!}
          setPage={setPage}
          lastPage={products?.meta.lastPage!}
        />
      </div>
    </Fragment>
  )
}

export default ProductList
