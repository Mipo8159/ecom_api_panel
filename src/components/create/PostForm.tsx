import {CKEditor, CKEditorEventPayload} from 'ckeditor4-react'
import React, {ChangeEvent, FormEvent, Fragment, useRef, useState} from 'react'
import {BiImage} from 'react-icons/bi'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {useAddPostMutation} from '../../store/post/post.api'
import {FileType} from '../../types/file.type'
import FileModal from '../modals/FileModal'
import FileItem from '../ui/FileItem'

const PostForm: React.FC = () => {
  const navigate = useNavigate()
  const [addPost] = useAddPostMutation()
  const ref = useRef<HTMLDivElement>(null)

  const [title, setTitle] = useState<string>('')
  const [body, setBody] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [files, setFiles] = useState<FileType[]>([])

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const post = {
      title,
      body,
      description,
      gallery: files.map((f) => f._id),
    }

    addPost({post}).then((res: any) => {
      if (res.error) {
        toast.error(res.error.data.error)
      } else {
        navigate('/posts')
      }
    })
  }

  return (
    <Fragment>
      <FileModal files={files} setFiles={setFiles} active={true} />

      <form
        onSubmit={onSubmit}
        className="row border border-secondary p-3 py-4 w-100"
        style={{width: '1000px'}}
      >
        <div className="row">
          <div className="col-md-6 mb-4">
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

            {/* IMAGES */}
            <label
              htmlFor="rating"
              className="form-label fw-semibold text-capitalize"
            >
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

export default PostForm
