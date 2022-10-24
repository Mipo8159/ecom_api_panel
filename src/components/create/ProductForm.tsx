import React, {Fragment, useState, ChangeEvent, FormEvent} from 'react'
import {CKEditor, CKEditorEventPayload} from 'ckeditor4-react'
import FileModal from '../modals/FileModal'
import {BiImage} from 'react-icons/bi'
import FileItem from '../ui/FileItem'
import {FileType} from '../../types/file.type'
import {FaStar} from 'react-icons/fa'
import {BiCategoryAlt} from 'react-icons/bi'

const ProductForm: React.FC = () => {
  const [title, setTitle] = useState<string>('')
  const [body, setBody] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const [rating, setRating] = useState<string>('')
  const [ratingH, setRatingH] = useState<number>(0)
  const [files, setFiles] = useState<FileType[]>([])

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const product = {
      title,
      body,
      description,
      price,
      rating,
      images: files.map((f) => f._id),
    }
    console.log(product)
  }

  return (
    <Fragment>
      <FileModal files={files} setFiles={setFiles} active={true} />

      <form onSubmit={onSubmit} className="row border border-secondary p-3 py-4">
        <div className="col-md-6">
          {/* TITLE */}
          <div className="mb-3">
            <label
              htmlFor="title"
              className="form-label fw-semibold text-capitalize"
            >
              title
            </label>
            <input
              value={title}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
              className="form-control border-secondary"
              id="title"
            />
          </div>

          {/* BODY */}
          <div className="mb-3">
            <label htmlFor="body" className="form-label fw-semibold text-capitalize">
              body
            </label>
            <textarea
              value={body}
              rows={3}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setBody(e.target.value)
              }
              className="form-control border-secondary"
              id="body"
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
              // value={description}
              onChange={(e: CKEditorEventPayload<'change'>) =>
                setDescription(e.editor.getData())
              }
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
              <input
                value={price}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPrice(e.target.value)
                }
                className="form-control border-secondary"
                id="price"
              />
            </div>

            {/* RATING */}
            <div className="mb-3 flex-grow-1 ms-2">
              <label
                htmlFor="price"
                className="form-label fw-semibold text-capitalize"
              >
                Rating
              </label>

              <div
                className="form-control d-flex justify-content-center"
                style={{padding: '5px'}}
              >
                {[...Array(5).keys()].map((s) => (
                  <div
                    key={s}
                    onClick={() => setRating(String(s + 1))}
                    onMouseEnter={() => setRatingH(s + 1)}
                    onMouseLeave={() => setRatingH(0)}
                    className={`mx-3 rating ${
                      (rating ? rating : ratingH) > s ? 'rating-active' : ''
                    }`}
                  >
                    <FaStar />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* IMAGES */}
          <label htmlFor="rating" className="form-label fw-semibold text-capitalize">
            associated files
          </label>
          <div
            className="form-control border border-secondary position-relative mb-3 p-1"
            style={{height: '310px'}}
          >
            <div className="row p-2">
              {files.map((file) => (
                <FileItem
                  key={file._id}
                  file={file}
                  files={files}
                  setFiles={setFiles}
                  css={'col-md-3 img-box'}
                  active={false}
                />
              ))}
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

          {/* CATEGORIES */}
          <label className="form-label fw-semibold text-capitalize">
            categories
          </label>
          <div
            className="border border-secondary form-control position-relative"
            style={{minHeight: '80px'}}
          >
            <button
              type="button"
              className="btn position-absolute bg-black d-flex justify-content-center px-2"
              style={{right: '10px', bottom: '10px'}}
              data-bs-toggle="modal"
              data-bs-target="#file-modal"
            >
              <BiCategoryAlt className="text-white fs-5" />
            </button>
          </div>
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
