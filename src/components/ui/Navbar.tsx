import React from 'react'
import {Link} from 'react-router-dom'
import {FaPlus} from 'react-icons/fa'

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark px-4 mb-5">
      <div className="container-fluid">
        <Link to={'/'}>
          <a className="navbar-brand">ECOM PANEL</a>
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
                <a className="nav-link active" aria-current="page">
                  Products
                </a>
              </Link>
            </li>

            <li className="nav-item text-uppercase">
              <Link to={'/categories'}>
                <a className="nav-link active" aria-current="page">
                  Categories
                </a>
              </Link>
            </li>

            <li className="nav-item text-uppercase">
              <Link to={'/posts'}>
                <a className="nav-link active" aria-current="page">
                  Posts
                </a>
              </Link>
            </li>

            <li className="nav-item ms-4">
              <Link to={'/create'}>
                <a
                  className="nav-link bg-success active mt-1 d-flex align-items-center px-2"
                  aria-current="page"
                >
                  <FaPlus />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
