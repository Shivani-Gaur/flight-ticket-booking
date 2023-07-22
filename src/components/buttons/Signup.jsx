import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../../empComp/Empservices/EmployeeService'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [employee, setEmployee] = useState({
    id: "",
    userName:"",
    firstName: "",
    lastName: "",
    password:"",
    emailId: "",
  });

  const navigaye = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    EmployeeService.saveEmployee(employee)
      .then((response) => {
        console.log(response);
       navigaye("/flights");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const reset = (e) => {
    e.preventDefault();
    setEmployee({
      id: "",
      userName:"",
      firstName: "",
      lastName: "",
      password:"",
      emailId: "",

    });
  };
  
  return (
    <>
     <button type="button" className="btn btn-outine-primary ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
         <span className="fa fa-user-plus me-1"></span>Register Here
</button>
<div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">User Registration</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
          <button className="btn btn-primary w-100 mb-2">
              <span className="fa fa-google me-2"></span>SignUp with Google</button>
 <button className="btn btn-primary w-100 mb-2">
              <span className="fa fa-facebook me-2"></span>SignUp with Facebook</button>
     
      <form>
      <div className="mb-3">
    <label htmlFor="exampleInput" className="form-label">ID</label>
    <input type="text" className="form-control" id="exampleInputId" 
    />
    </div>
    <div className="mb-3">
    <label htmlFor="exampleInput" className="form-label">User Name</label>
    <input type="text" name="userName"
            value={employee.userName}
            onChange={(e) => handleChange(e)} className="form-control" id="exampleInput"
/>
    </div>
  <div className="mb-3">
    <label htmlFor="exampleInput" className="form-label">First Name</label>
    <input type="text" name="firstName"
            value={employee.firstName}
            onChange={(e) => handleChange(e)} className="form-control" id="exampleInputFirstName"/>
    </div>
    <div className="mb-3">
    <label htmlFor="exampleInput" className="form-label">Last Name</label>
    <input type="text" name="lastName"
            value={employee.lastName}
            onChange={(e) => handleChange(e)} className="form-control" id="exampleInputLastName"/>
    </div>
    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" name="emailId"
            value={employee.emailId}
            onChange={(e) => handleChange(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    />
    <div id="emailHelp" className="form-text">We'll keep your details confidential.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name="password"
            value={employee.password}
            onChange={(e) => handleChange(e)} className="form-control" id="exampleInputPassword1"/>
  </div>

  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button  type="submit" onClick={saveEmployee} className="btn btn-outline-primary mt-5"
  >Register</button>
</form>
      </div>
     
    </div>
  </div>
</div></>
  )
}

export default Signup