import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import DATA1 from '../DATA1';
import DATA2 from '../DATA2';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTicket, delTicket } from '../redux/actions';
import LoginHeader from './LoginHeader';
import { useSelector } from 'react-redux';


const FlightDetails = () => {
    const state=useSelector((state) =>state.addTicket)
    var total=0;
    var total1=0;
    var total2=0;
    
    const ticketList1=(flight)=>{
        total1=total+flight.price;
        return(
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <center>
                    <h6 className="my-0">{flight.title}</h6>
                    
                    </center>
            </li>
        )
    }  
    const ticketList2=(flight)=>{
        total2=total+flight.price;
        return(
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <center>
                    <h6 className="my-0">{flight.title}</h6>
                 {/*}   <h6 className="my-0">{flight.price *2}</h6>  */}
                    <p>{flight.desc}</p>
                    </center>
            </li>
        )
    } 
        
                        
    const [bookBtn1,setBookBtn1] =useState("Confirm Departure Location")
    const [bookBtn2,setBookBtn2] =useState("Confirm Arrival Location")
    {/*Now we need a flight id which is passed from the flight ticket page */}
    const flightid1 =useParams();
    const flightid2 =useParams();
    const flightdetail1=DATA1.filter(x=>x.id==flightid1.id)
    const flightdetail2=DATA2.filter(x=>x.id==flightid2.id)
    const flight1=flightdetail1[0];
    const flight2=flightdetail2[0];
    console.log(flight1);
    

    const dispatch=useDispatch()
    const handleBooking1=(flight)=>{
        
        if(bookBtn1==="Confirm Departure Location"){
            dispatch(addTicket(flight))
            setBookBtn1("Added Departure Location")
        }
        else{
            dispatch(delTicket(flight))
            setBookBtn1("Confirm Departure Location")
        }
        

    }
    const handleBooking2=(flight)=>{
        
        if(bookBtn2==="Confirm Arrival Location"){
            dispatch(addTicket(flight))
            setBookBtn2("Added Arrival Location")
        }
        else{
            dispatch(delTicket(flight))
            setBookBtn2("Confirm Arrival Location")
        }
        

    }

  return (
    <>
    <div className="container my-5 py-3">
        <div className="row">
            <LoginHeader/>
            {/*<div className="row-md-6 d-flex justify-content-center mx-auto product">
                <img src={flight1.img} alt={flight1.title} height="400px" />
  </div> */}
            <div className="row-md-6 d-flex flex-column justify-content-center">
            <ul className="list-group mb-3">
        {/*   {state.map(ticketList1)}    */}
                        <br/>
                        <br/>
                        {state.map(ticketList2)}

                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total (USD)</span>
                            <strong>${total1+total2}</strong>
                        </li>
                    </ul>
               <h2 className="dislay-5 fw-bold">{flight1.title}</h2>
               
                <hr/>
                
                <p>{flight2.desc}</p>
                <h3>{(total1+total2)}</h3>
                <button onClick={()=>handleBooking1(flight1)} className="btn 
                btn-outline-primary my-5">{bookBtn1}</button>
                <button onClick={()=>handleBooking2(flight2)} className="btn 
                btn-outline-primary my-5">{bookBtn2}</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default FlightDetails