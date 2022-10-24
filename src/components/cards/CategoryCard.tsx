import React from 'react'
import {FaTimes} from 'react-icons/fa'
import {useRemoveCategoryMutation} from '../../store/category/category.api'
import {CategoryType} from '../../types/category.type'
import MutateModal from '../modals/MutateModal'
import Loader from '../ui/Loading'

interface CategoryCardProps {
  category: CategoryType
}
const CategoryCard: React.FC<CategoryCardProps> = ({category}) => {
  const [removeCategory] = useRemoveCategoryMutation()

  return (
    <div className="col-md-3" style={{cursor: 'pointer'}}>
      <MutateModal
        title="Remove category?"
        onAccept={removeCategory}
        _id={category._id}
      />

      <div className={`border border-secondary position-relative`}>
        <img
          style={{objectFit: 'contain', height: '100%'}}
          src={category?.image ? category?.image.imgUrl : '/placeholder.jpg'}
          alt={category?.title}
        />

        <div
          className="position-absolute text-center bg-white w-75 py-3 d-flex flex-column align-items-center justify-content-center"
          style={{top: '35%', left: '12.5%'}}
        >
          <h6 className="mb-1"> {category.title.toUpperCase()}</h6>
          <small className="w-75"> {category.body}</small>
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

export default CategoryCard
