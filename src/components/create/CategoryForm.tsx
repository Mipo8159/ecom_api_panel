import React from 'react'

const CategoryForm: React.FC = () => {
  return (
    <form>
      {/* TITLE */}
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          title
        </label>
        <input className="form-control" id="title" />
      </div>

      {/* BODY */}
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          body
        </label>
        <input type="password" className="form-control" id="exampleInputPassword1" />
      </div>

      {/* IMAGES */}
      {/* PRODUCTS */}

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  )
}

export default CategoryForm
