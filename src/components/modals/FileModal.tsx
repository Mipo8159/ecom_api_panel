import React, {useState} from 'react'
import {useGetFilesQuery} from '../../store/file/file.api'
import {FileType} from '../../types/file.type'
import FileItem from '../ui/FileItem'
import Pagination from '../ui/Pagination'

interface FileModalProps {
  files?: FileType[]
  setFiles?: Function
  single?: boolean
  file?: FileType
  setFile?: Function
}
const FileModal: React.FC<FileModalProps> = ({
  files,
  setFiles,
  single,
  file,
  setFile,
}) => {
  const [page, setPage] = useState<number>(1)
  const {isLoading, isError, data} = useGetFilesQuery(page)

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
                  <FileItem
                    key={file._id}
                    file={file}
                    css={'col-md-2'}
                    files={files}
                    setFiles={setFiles}
                    active={false}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="modal-footer f-flex justify-content-center">
            <Pagination
              page={data?.files.meta.page!}
              setPage={setPage}
              lastPage={data?.files.meta.lastPage!}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FileModal
