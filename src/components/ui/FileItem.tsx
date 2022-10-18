import React from 'react'
import {FileType} from '../../types/file.type'
import {FaTimes} from 'react-icons/fa'

type FileItemProps = {
  file?: FileType
  css?: string
  files?: FileType[]
  setFiles?: Function
  active?: boolean
  single?: boolean
  setFile?: Function
  image?: FileType
}
const FileItem: React.FC<FileItemProps> = ({
  file,
  css,
  files,
  setFiles,
  single,
  setFile,
  active,
  image,
}) => {
  const checked = (): boolean => {
    return Boolean(files?.some((f) => f._id === file?._id))
  }

  const removeImages = () => {
    setFiles && setFiles(files?.filter((i) => i._id !== file?._id))
  }

  const selectImages = () => {
    const includes = Boolean(files?.some((f) => f._id === file?._id))
    if (includes) {
      setFiles && setFiles(files?.filter((i) => i._id !== file?._id))
    } else {
      setFiles && setFiles([...files!, file])
    }
  }

  return (
    <div
      onClick={() => {
        single ? setFile && setFile(file) : selectImages()
      }}
      className={`mb-4 ${css ? css : 'col-md-3'} `}
      style={{cursor: 'pointer'}}
    >
      <div
        className={`border border-secondary position-relative  ${
          checked() ? 'border-warning' : ''
        } ${image && image._id === file?._id ? 'border border-warning' : ''}`}
        style={{height: active ? '175px' : '130px'}}
      >
        <img
          style={{objectFit: 'contain', height: '100%'}}
          src={file?.imgUrl ? file?.imgUrl : '/placeholder.jpg'}
          alt={file?.key}
        />

        <div
          className="input-group mb-3 position-absolute"
          style={{top: '4px', left: '4px'}}
        >
          {!single &&
            (!active ? (
              <span
                onClick={removeImages}
                className="position-absolute file-rmv"
                style={{top: '-5px', right: '8px'}}
              >
                <FaTimes />
              </span>
            ) : (
              <input
                className="form-check-input mt-0"
                checked={checked()}
                onChange={selectImages}
                type="checkbox"
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default FileItem
