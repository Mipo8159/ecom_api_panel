import React from 'react'

interface MutateModal {
  title: string
  onAccept: Function
  _id: string
}
const MutateModal: React.FC<MutateModal> = ({title, onAccept, _id}) => {
  return (
    <div className="modal fade" id="mutate-modal">
      <div className="modal-dialog">
        <div className="modal-content modal-mutate">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="file-modal">
              {title}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body d-flex justify-content-evenly align-items-center position-relative">
            <button
              type="button"
              className="btn btn-danger flex-grow-1 w-50 me-2"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              onClick={() => onAccept(_id)}
              type="button"
              className="btn btn-dark flex-grow-1 w-50 ms-2"
              data-bs-dismiss="modal"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MutateModal
