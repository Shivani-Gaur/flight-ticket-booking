import React from 'react'
import DATA from '../Data'
import {Link} from 'react-router-dom'
import Header from './Header'


const GuestOffer = () => {
  const bookedFlight=(ticket)=>{
    return(
      <center>
      <div className="col-md-3">
                  <ul>
                    <div>
                  <h5 className="card-title" width="200px" height="500px">{ticket.title}</h5>
                  <h6>${ticket.price}</h6>
                  <hr/>
                  <br/>
                  <br/>
                  </div>
                 {/*}   <img src={ticket.img} class="card-img-top" alt={ticket.title}  height="50px" width="800px" />
                 */}   </ul>
                {/*     <h5 class="card-title">{ticket.title}</h5>
                      <p className="lead">${ticket.price}</p>
    */}  
                 
                
              </div>
              </center>
    );
  }
  return (
    <div>
         <Header/>
      <div className="container py-5">
      <div className="col-12 text-center">
      <h4>Flights</h4>
      <div className="row">
        </div>  
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
  
export default GuestOffer