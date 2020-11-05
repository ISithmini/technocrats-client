import React from 'react'
import { Link } from 'react-router-dom';
import "bootstrap/js/src/collapse.js";

function Navbar() {

  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <Link className="navbar-brand" to="/">TechnocratsJobs</Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContext">

        <ul className="navbar-nav mr-auto">

          <li className="nav-item ">
            <Link className="nav-link" to='/jobs'>Jobs <span className="sr-only">(current)</span></Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/seekers">Freelancers</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/seekers">About us</Link>
          </li>
        </ul>

        <Link className="nav-link" to="/Login">
          <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Log in</button>
        </Link>

        <Link className="" to="/register">
          <button className="btn btn-primary my-2 my-sm-0" type="submit">Create Account</button>
        </Link>

      </div>

    </nav>
  )
}

export default Navbar
