import React from 'react'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import classNames from 'classnames'

interface PaginationProps {
  page: number
  setPage: Function
  lastPage: number
}
const Pagination: React.FC<PaginationProps> = ({page, setPage, lastPage}) => {
  function next() {
    setPage((prev: number) => (prev + 1 > lastPage ? prev : prev + 1))
  }

  function prev() {
    setPage((prev: number) => (prev - 1 === 0 ? prev : prev - 1))
  }

  function goTo(val: number) {
    setPage(val)
  }

  return (
    <nav>
      <ul className="pagination justify-content-end">
        <li
          onClick={prev}
          className="page-item disabled"
          style={{cursor: 'pointer'}}
        >
          <span className="page-link pb-2  cursor-pointer">
            <FaChevronLeft className="text-black" />
          </span>
        </li>

        {[...Array(lastPage).keys()].map((p) => (
          <li
            key={p + 1}
            onClick={() => goTo(p + 1)}
            className="page-item"
            style={{cursor: 'pointer'}}
          >
            <span
              className={classNames('page-link pb-2 text-black', {
                'bg-black text-white': page === p + 1,
              })}
            >
              {p + 1}
            </span>
          </li>
        ))}

        <li onClick={next} className="page-item" style={{cursor: 'pointer'}}>
          <span className="page-link pb-2">
            <FaChevronRight className="text-black" />
          </span>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
