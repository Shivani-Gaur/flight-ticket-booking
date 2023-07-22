import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delTicket } from '../redux/actions'
import { Link } from 'react-router-dom'
import LoginHeader from './LoginHeader'


const TotalBooking = () => {
  const state1=useSelector((state)=>state.addTicket)
  const state2=useSelector((state)=>state.addTicket)
  const dispatch=useDispatch()
  const handleClose=(ticket)=>{
dispatch(delTicket(ticket))
  }
  
  var p1=0;
  var p2=0;

  const bookedFlights1=(bookedFlight)=>{
    p1=bookedFlight.price;
    return (
        
      <div className="px-4 my-5 bg-light rounded-3" key={bookedFlight.id}>
        <div className="container py-4">
          <button onClick={()=>handleClose(bookedFlight)} className="btn-close float-end" aria-label="Close"></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
          {/*}    <img src={bookedFlight.img} alt={bookedFlight.title} height="200px"
              width="180px"/>  */}
            </div>
            <div className="col-md-4">
              <h3>{bookedFlight.title}</h3>
              </div>
          </div>
        </div>
      </div>
    )
  }

  
  const bookedFlights2=(bookedFlight)=>{
    p2=bookedFlight.price
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={bookedFlight.id}>
        <div className="container py-4">
          <button onClick={()=>handleClose(bookedFlight)} className="btn-close float-end" aria-label="Close"></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
             {/*} <img src={bookedFlight.img} alt={bookedFlight.title} height="200px"
              width="180px"/> */}
            </div>
            <div className="col-md-4">
              <h3>{bookedFlight.title}</h3>
              <p className="lead fw-bold">${p1+p2}</p>
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
          <Link to="/checkout" className="btn btn-primary btn-lg mb-5 w-25">Proceed To Payment</Link>
        </div>
      </div>
    )
  }
  return (
    <>
    <LoginHeader/>
    {state1.length=== 0 && state2.length=== 0 && ((state1.length+state2.length)%2)=== 0  && noBooking()}
 {state1.length!==0 && state2.length!==0 && state1.map(bookedFlights1) && state2.map(bookedFlights2)}
    {state1.length!== 0 && state2.length!== 0 && button()}
    
    </>
  )
}

export default TotalBooking