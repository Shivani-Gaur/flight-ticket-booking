import './App.css';
import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
//import Flights from './components/Flights';
//import Contact from './components/Contact';
import Checkout from './components/Checkout';
//import FlightDetails from './components/FlightDetails';
//import TotalBooking from './components/TotalBooking';
import {Route,Routes,Navigate} from 'react-router-dom';
import RedirectingPage from './components/buttons/RedirectingPage';
import ListUser from './components/ListUser';

import AddEmployee from './empComp/Empcomponents/EAddEmployee';
import UpdateEmployee from './empComp/Empcomponents/EUpdateEmployee';
import EmployeeList from './empComp/Empcomponents/EEmployeeList'; 
import Login from './components/buttons/Login';
import Logout from './components/buttons/Logout';
import UserLogin from './components/buttons/UserLogin';
import UserBooking from './components/UserBooking';
import GuestOffer from './components/GuestOffer';

import Flights from './components/Ticket';
import FlightDetails from './components/TicketDetails';
import TotalBooking from './components/TotalTicket';


function App(){
  return (
  <>
   
    
   {/* <Header/> 
   <Checkout/> */}
   {/*<PageRegis/>*/}
      <Routes>
      <Route path="/" element={<Home/>} />
     {/* 
      <Route path="/flights" element={<Flights/>} />
      <Route path="/flights/:id" element={<FlightDetails/>} />
      <Route path="/bookings" element={<TotalBooking/>} />   */}
     {/* <Route path="/flightdetails" element={<FlightDetails/>} />*/}
      

      <Route path="/flights" element={<Flights/>} />
      <Route path="/flights/:id" element={<FlightDetails/>} />
      <Route path="/bookings" element={<TotalBooking/>} />

      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<ListUser/>} />
      <Route path="/redirecting" element={<RedirectingPage/>} />
      {/*///////  */}
      <Route path="/employeeList" element={<EmployeeList />} />
      <Route path="/addEmployee" element={<AddEmployee />} />
      <Route path="/editEmployee/:id" element={<UpdateEmployee />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/logout" element={<Logout/>} />
      <Route path="/userlogin" element={<UserLogin/>} />
      <Route path="/userbookings" element={<UserBooking/>} />
      <Route path="/guestOffer" element={<GuestOffer/>} />
    {/* <Navigate path="/" />  */}
      </Routes>  
    <Footer/>
   
   </>
  );
}

export default App;
