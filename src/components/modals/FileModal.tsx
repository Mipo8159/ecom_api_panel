import React from 'react'
import {useGetFilesQuery} from '../../store/file/file.api'
import {FileType} from '../../types/file.type'
import FileItem from '../ui/FileItem'

const FileModal: React.FC = () => {
  const {isLoading, isError, data} = useGetFilesQuery(1)

  return (
    <div className="modal fade" id="file-modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="file-modal">
              Choole files
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body position-relative">
            {isError && <small className="text-success">Error Occured</small>}
            {isLoading ? (
              <div
                className="position-absolute spinner-border text-secondary"
                style={{right: '50%', top: '45%'}}
              />
            ) : (
              <div className="row">
                {data?.files.files.map((file: FileType) => (
                  <FileItem key={file._id} css={'col-md-2'} />
                ))}
              </div>
            )}
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FileModal
