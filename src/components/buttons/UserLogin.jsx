import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
import Header from '../Header';

 class UserLogin extends Component {
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
        if(username==="Shivani_G" && password==="2022"){
          this.setState({
            loggedIn:true
          })
        }
      }

  render() {
    if(this.state.loggedIn){
        return <Navigate to="/flights"/>}
    return (
      <div>
          <Header/>
          <br/>
          <center>
          <form onSubmit={this.submitForm} >
     <div>     <span className="fa fa-sign-in me-4"></span>
     <h3>Passenger Login</h3>
</div>
<br/>
<br/> 
<button className="btn btn-primary w-50 mb-2">
              <span className="fa fa-google me-2"></span>Signin with Google</button>
   <div><button className="btn btn-primary w-50 mb-2">
              <span className="fa fa-facebook me-2"></span>Signin with Facebook</button>
              </div>   
            
  <div className="row mb-3 ">
  <center>
    <label for="inputEmail3" className="col-sm-2 col-form-label col-form-label-lg ">UserName</label>
    
    </center></div>
    <div className="col-sm-5">
      <input type="text" className="form-control text-center" 
      name="username" value={this.state.username} onChange={this.onChange}
      id="inputEmail3"/>
   <br/>
  </div>
  <div className="row mb-3">
    <center>
    <label for="inputPassword3" className="col-sm-2 col-form-label col-form-label-lg">Password</label>
    </center></div>
    <div className="col-sm-5">
      <input type="password" className="form-control text-center"
      name="password" value={this.state.password} onChange={this.onChange}
       id="inputPassword3"/>
    
  </div>
 <br/>
  <button type="submit" className="btn btn-primary">Sign in</button>
</form>
</center>
      </div>
    )
  }
}

export default UserLogin