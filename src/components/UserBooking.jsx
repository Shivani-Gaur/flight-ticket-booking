import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delTicket } from '../redux/actions'
import { NavLink } from 'react-router-dom'
import Booking from './buttons/Booking'



const UserBooking = () => {
  const state=useSelector((state)=>state.addTicket)
  const dispatch=useDispatch()
  const handleClose=(ticket)=>{
dispatch(delTicket(ticket))
  }

  const bookedFlights=(bookedFlight)=>{
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={bookedFlight.id}>
        <div className="container py-4">
          <button onClick={()=>handleClose(bookedFlight)} className="btn-close float-end" aria-label="Close"></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img src={bookedFlight.img} alt={bookedFlight.title} height="200px"
              width="180px"/>
            </div>
            <div className="col-md-4">
              <h3>{bookedFlight.title}</h3>
              <p className="lead fw-bold">${bookedFlight.price}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  const noBooking=()=>{
    return (
      <div className="px-4 my-5 bg-light rounded-3">
        <div className="container py-5">
          <div className="row">
            <h3>No Tickets Booked</h3>
          </div>
        </div>
      </div>
    )
  }
  const button=()=>{
    return (
      <div className="container">
        <div className="row">
          <NavLink to="/checkout" className="btn-btn-outline-primary mb-5 w-25">Proceed To Payment</NavLink>
        </div>
      </div>
    )
  }
  return (
    <>
    <Booking/>
    {state.length=== 0 && noBooking()}
    {state.length!==0 && state.map(bookedFlights)}
    {state.length!== 0 && button()}
    </>
  )
}

export default UserBooking