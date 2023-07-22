import React from 'react'
import DATA from '../Data'
import {Link} from 'react-router-dom'
import LoginHeader from './LoginHeader'

const Flights = () => {
  const bookedFlight=(ticket)=>{
    return(
      
      <div className="col-md-3">
                  <div class="card my-5 py-4">
                    <img src={ticket.img} class="card-img-top" alt={ticket.title} />
                    <div class="card-body">
                      <h5 class="card-title">{ticket.title}</h5>
                      <p className="lead">${ticket.price}</p>
 <Link to={`/flights/${ticket.id}`} className="btn btn-outline-primary" >Book Now</Link>            
                    </div>
                  </div>
                
              </div>
            
    );
  }
  return (
    <div>
      <div className="container py-5">
      <div className="row">
      <LoginHeader/>
        </div>
        <hr/>
      <div className="col-12 text-center">
        <h4>Flight Offers</h4>
      </div> 
      </div>
<div className="container">
  <div className="row">
    {DATA.map(bookedFlight)}
  </div>
</div>
    </div>
  )
}
  {/*<div class="card my-5 py-4" key={ticket.id} style={{width: "18rem"}}>
  <img src={ticket.img} class="card-img-top" alt={ticket.title}/>
  <div class="card-body text-center">
    <h5 class="card-title">{ticket.title}</h5>
    <p className="lead">${ticket.price}</p>
     <NavLink to={'/flights/${ticket.id}'} className="btn btn-outline-primary">Book Now</NavLink>
  </div>
    </div> */}
export default Flights