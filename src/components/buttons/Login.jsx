import React from 'react'
import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

//const Login = () => {
export default class Login extends Component{

  constructor(props){
    super(props)
    let loggedIn=false;
    this.state={
      username:"",
      password:"",
      loggedIn
    }
    this.onChange=this.onChange.bind(this)
    this.submitForm=this.submitForm.bind(this)
  }
  onChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  submitForm(e){
    e.preventDefault()
    const{username,password}=this.state
    if(username==="Admin" && password==="B"){
      this.setState({
        loggedIn:true
      })
    }
  }
  render(){
  if(this.state.loggedIn){
      return <Navigate to="/employeeList"/>}
    
  return (
    <>
     <form onSubmit={this.submitForm}>
    <button type="button" className="btn btn-outine-primary ms-auto" data-bs-toggle="modal" data-bs-target="#loginModal">
  <spna className="fa fa-sign-in me-4"></spna>Admin Login
</button>
<div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Login</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
          <button className="btn btn-primary w-100 mb-2">
              <span className="fa fa-google me-2"></span>Signin with Google</button>
 <button className="btn btn-primary w-100 mb-2">
              <span className="fa fa-facebook me-2"></span>Signin with Facebook</button>
     
     
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
    <input type="text" className="form-control"
    name="username" value={this.state.username} onChange={this.onChange}
    id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll keep your details confidential.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" 
    name="password" value={this.state.password} onChange={this.onChange}
    id="exampleInputPassword1"/>
  </div>
  
 <button type="submit" className="btn btn-outline-primary mt-5">Submit</button>
 {/*  <NavLink to={`/employeeList`} type="submit" className="btn btn-outline-primary mt-5">Submit</NavLink>
*/}

      </div>
     
    </div>
  </div>
</div>
</form>
</>
  )
  }
}

//export default Login