import React from 'react'
import {FileType} from '../../types/file.type'
import {FaTimes} from 'react-icons/fa'

type FileItemProps = {
  file?: FileType
  css?: string
  files?: FileType[]
  setFiles?: Function
  active: boolean
}
const FileItem: React.FC<FileItemProps> = ({file, css, files, setFiles, active}) => {
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
    <div onClick={selectImages} className={`mb-4 ${css ? css : 'col-md-3 '}`}>
      <div
        className={`border border-secondary position-relative  ${
          checked() ? 'border-warning' : ''
        }`}
        style={{height: active ? '175px' : 'auto'}}
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
          {active ? (
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
          )}
        </div>
      </div>
    </div>
  )
}

export default FileItem
