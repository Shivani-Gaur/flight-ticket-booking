import React from 'react'
import { NavLink } from 'react-router-dom'
const About = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col md-6">
            <h1>About Us</h1>
            <p className="lead">
              <h5>King Flyer Airlines</h5>
            </p>
            <NavLink to="/contact" className="btn btn-primary">Contact Us</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About