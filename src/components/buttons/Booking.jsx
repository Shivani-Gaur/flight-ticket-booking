import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Booking = () => {
  const state = useSelector((state)=>state.addTicket)
 
  

  return (
   
    <>
    <Link to="/bookings" className="btn btn-primary ms-2">
     <span className="fa fa-shoping-cart me-1"></span>Cancel/Rescheduling ({state.length/2}) 
    </Link>
    {/*({state.length})*/}
    </>
  )
}

export default Booking