import React from 'react'
import PropTypes from 'prop-types'
import About from './About'


export default function Navbar(props){
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.about}</a>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <div className='container'>
      <div class="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label className="form-check-label" for="flexSwitchCheckDefault">Toggle mode</label>
      </div>
</div>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    )
}

Navbar.propTypes={
    title : PropTypes.string.isRequired,
    about : PropTypes.string.isRequired,
}

// When i not pass any title then it'ill take it from here by default
Navbar.defaultProps={
    title:"Set title here",
    about:"set about section here"
}