import React from 'react'
import Login from './buttons/Login'
import Signup from './buttons/Signup'
import Booking from './buttons/Booking'
import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid py-2">
 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        {/*<li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>  */}
      <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
      <li className="nav-item">
          <Link to="/guestOffer" className="nav-link" href="#">Flights</Link>
        </li> 
      {/*  <li className="nav-item">
          <Link to="/about" className="nav-link" href="#">About Us</Link>
        </li> */}
        <li className="nav-item">
          <Link to="/userlogin" className="nav-link" href="#">Login</Link>
        </li>
     {/*}   <li className="nav-item">
          <Link to="/employeeList" className="nav-link" href="#">Admin Login</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" to="/flights">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" to="/about">Offers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" path="/contact">Make Payment</a>
  </li>*/}
      </ul>
      <a class="navbar-brand mx-auto fw-bold" to="/">KING FLYER</a>
     {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
  </form>*/}
    </div>
  <Signup/>
  <Login/> 
 
 {/* <Booking/>  */}
  </div>
</nav>
    </>
  )
}

export default Header