import React from 'react'
import {Link} from 'react-router-dom'
import {FaPlus} from 'react-icons/fa'

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark px-4 mb-5">
      <div className="container-fluid">
        <Link to={'/'}>
          <span className="navbar-brand">ECOM PANEL</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse justify-content-end navbar-collapse"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item text-uppercase">
              <Link to={'/products'}>
                <span className="nav-link active" aria-current="page">
                  Products
                </span>
              </Link>
            </li>

            <li className="nav-item text-uppercase">
              <Link to={'/categories'}>
                <span className="nav-link active" aria-current="page">
                  Categories
                </span>
              </Link>
            </li>

            <li className="nav-item text-uppercase">
              <Link to={'/posts'}>
                <span className="nav-link active" aria-current="page">
                  Posts
                </span>
              </Link>
            </li>

            <li className="nav-item ms-4">
              <Link to={'/create'}>
                <span
                  className="nav-link bg-success active mt-1 d-flex align-items-center px-2"
                  aria-current="page"
                >
                  <FaPlus />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
