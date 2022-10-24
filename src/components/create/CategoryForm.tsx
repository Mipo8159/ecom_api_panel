import React, {useState, useRef, ChangeEvent, Fragment, FormEvent} from 'react'
import {BiImage} from 'react-icons/bi'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {useAddCategoryMutation} from '../../store/category/category.api'
import {FileType} from '../../types/file.type'
import FileModal from '../modals/FileModal'

const CategoryForm: React.FC = () => {
  const navigate = useNavigate()
  const [addCategory] = useAddCategoryMutation()

  const [title, setTitle] = useState<string>('')
  const [body, setBody] = useState<string>('')
  const [file, setFile] = useState<FileType>({} as FileType)

  const ref = useRef<HTMLDivElement>(null)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const category = {
      title,
      body,
      image: file._id,
      products: [],
    }

    addCategory({category}).then((res: any) => {
      if (res.error) {
        toast.error(res.error.data.error)
      } else {
        navigate('/categories')
      }
    })
  }

  return (
    <Fragment>
      <FileModal setFile={setFile} single={true} image={file} />

      <form
        onSubmit={onSubmit}
        className="row border border-secondary p-3 py-4 w-1000"
        style={{width: '1000px'}}
      >
        <div className="row">
          <div className="col-md-6 mb-4">
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
              <label
                htmlFor="body"
                className="form-label fw-semibold text-capitalize"
              >
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

            <label className="form-label fw-semibold text-capitalize">
              products
            </label>
            <div
              className="border border-secondary form-control"
              style={{minHeight: '80px'}}
            ></div>
          </div>

          <div className="col-md-6">
            {/* IMAGE */}
            <div
              onClick={() => ref.current?.click()}
              className="border border-secondary h-100"
              style={{cursor: 'pointer'}}
            >
              <img
                style={{objectFit: 'cover', height: '100%'}}
                src={file?.imgUrl ? file?.imgUrl : '/placeholder.jpg'}
                alt={file?.key}
              />

              <div
                ref={ref}
                className="btn d-none position-absolute bg-black d-flex justify-content-center px-2"
                style={{right: '10px', bottom: '10px'}}
                data-bs-toggle="modal"
                data-bs-target="#file-modal"
              >
                <BiImage className="text-white fs-5" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-100 d-flex justify-content-start">
          <button type="submit" className="btn w-25 bg-black text-white">
            Submit
          </button>
        </div>
      </form>
    </Fragment>
  )
}

export default CategoryForm
