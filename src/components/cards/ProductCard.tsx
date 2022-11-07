import React from 'react'
import {FaTimes} from 'react-icons/fa'
import {useRemoveProductMutation} from '../../store/product/product.api'
import {ProductType} from '../../types/product.type'
import MutateModal from '../modals/MutateModal'

interface ProductCardProps {
  product: ProductType
}
const ProductCard: React.FC<ProductCardProps> = ({product}) => {
  const [removeProduct] = useRemoveProductMutation()
  const [cover] = product.gallery

  return (
    <div className="col-md-3" style={{cursor: 'pointer'}}>
      <MutateModal
        title="Remove product?"
        onAccept={removeProduct}
        _id={product._id}
      />

      <div className="card h-75 position-relative">
        <img
          src={cover ? cover.imgUrl : '/placeholder.jpg'}
          alt={product?.title}
          style={{height: '65%', objectFit: 'cover'}}
        />

        <div className="card-body">
          <h6 className="mb-1"> {product.title.toUpperCase()}</h6>
          <p className="card-text">{product.body}</p>
        </div>

        <span
          className="position-absolute file-rmv"
          style={{top: '5px', right: '8px'}}
          data-bs-toggle="modal"
          data-bs-target="#mutate-modal"
        >
          <FaTimes />
        </span>
      </div>
    </div>
  )
}

export default ProductCard
