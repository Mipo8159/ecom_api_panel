import React, {Fragment, useState} from 'react'
import {CKEditor} from 'ckeditor4-react'
import FileModal from '../modals/FileModal'
import {BiImage} from 'react-icons/bi'
import FileItem from '../ui/FileItem'

const ProductForm: React.FC = () => {
  const [files, setFiles] = useState<File[]>([])

  return (
    <Fragment>
      <FileModal />

      <form className="row">
        <div className="col-md-6">
          {/* TITLE */}
          <div className="mb-3">
            <label
              htmlFor="title"
              className="form-label fw-semibold text-capitalize"
            >
              title
            </label>
            <input className="form-control border-secondary" id="title" />
          </div>

          {/* BODY */}
          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label fw-semibold text-capitalize"
            >
              body
            </label>
            <input
              type="password"
              className="form-control border-secondary"
              id="exampleInputPassword1"
            />
          </div>

          {/* DESCRIPTION */}
          <div className="mb-3">
            <label
              htmlFor="description"
              className="form-label fw-semibold text-capitalize"
            >
              description
            </label>
            <CKEditor
              id="description"
              style={{border: '1px solid rgb(108,117,125)'}}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="d-flex">
            {/* PRICE */}
            <div className="mb-3 flex-grow-1 me-3">
              <label
                htmlFor="price"
                className="form-label fw-semibold text-capitalize"
              >
                price
              </label>
              <input className="form-control border-secondary" id="price" />
            </div>

            {/* RATING */}
            <div className="mb-3 flex-grow-1 ms-2">
              <label
                htmlFor="rating"
                className="form-label fw-semibold text-capitalize"
              >
                rating
              </label>
              <input className="form-control border-secondary" id="rating" />
            </div>
          </div>

          {/* IMAGES */}
          <label htmlFor="rating" className="form-label fw-semibold text-capitalize">
            associated files
          </label>
          <div
            className="border border-secondary position-relative mb-3 p-2"
            style={{height: '230px'}}
          >
            <div className="row p-2">
              <FileItem />
              <FileItem />
              <FileItem />
              <FileItem />
              <FileItem />
              <FileItem />
            </div>

            <button
              type="button"
              className="btn position-absolute bg-black d-flex justify-content-center px-2"
              style={{right: '10px', bottom: '10px'}}
              data-bs-toggle="modal"
              data-bs-target="#file-modal"
            >
              <BiImage className="text-white fs-5" />
            </button>
          </div>

          {/* PRODUCTS */}
          <label htmlFor="rating" className="form-label fw-semibold text-capitalize">
            categories
          </label>
          <div
            className="border border-secondary"
            style={{minHeight: '112px'}}
          ></div>
        </div>

        <div className="w-100 d-flex justify-content-end">
          <button type="submit" className="btn w-25 bg-black text-white">
            Submit
          </button>
        </div>
      </form>
    </Fragment>
  )
}

export default ProductForm
