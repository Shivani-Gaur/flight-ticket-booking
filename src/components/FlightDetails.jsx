import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import DATA from '../Data';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTicket, delTicket } from '../redux/actions';
import LoginHeader from './LoginHeader';


const FlightDetails = () => {
    const [bookBtn,setBookBtn] =useState("Book Ticket")
    {/*Now we need a flight id which is passed from the flight ticket page */}
    const flightid =useParams();
    const flightdetail=DATA.filter(x=>x.id==flightid.id)
    const flight=flightdetail[0];
    console.log(flight);
    

    const dispatch=useDispatch()
    const handleBooking=(flight)=>{
        
        if(bookBtn==="Book Ticket"){
            dispatch(addTicket(flight))
            setBookBtn("Cancel Ticket")
        }
        else{
            dispatch(delTicket(flight))
            setBookBtn("Book Ticket")
        }
        

    }

  return (
    <>
    <div className="container my-5 py-3">
        <div className="row">
            <LoginHeader/>
            <div className="col-md-6 d-flex justify-content-center mx-auto product">
                <img src={flight.img} alt={flight.title} height="400px" />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
                <h1 className="dislay-5 fw-bold">{flight.title}</h1>
                <hr/>
                <h3>{flight.price}</h3>
                <p>{flight.desc}</p>
                <button onClick={()=>handleBooking(flight)} className="btn 
                btn-outline-primary my-5">{bookBtn}</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default FlightDetails