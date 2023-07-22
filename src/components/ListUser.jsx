import { Toast } from 'bootstrap';
import React, { Component } from 'react'
import UserService from '../services/UserService'

class ListUser extends Component {
    constructor(props){
        super(props)
        this.state={
            user:[]
        }
    }
    componentDidMount(){
        UserService.getUsers().then((res)=>{
            this.setState({user:res.data});
            
        },
        (error)=>{
            console.log(error);
           
        });
    };
    
  render() {
    return (
      <div>
          <h2 className="text-center">Passenger Details</h2>
          <div className="row">
              <table className="table table-striped table-bordered">
                  <thead>
                      <tr>
                          <th>ID</th>
                          <th>USERNAME</th>
                          <th>FIRST NAME</th>
                          <th>LAST NAME</th>
                          <th>EMAIL</th>
                          <th>PASSWORD</th>
                          <th>ACTIONS</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          this.state.user.map(
                              user=>
                              <tr key ={user.id}>
                                  <td>{user.username}</td>
                                  <td>{user.first_name}</td>
                                  <td>{user.last_name}</td>
                                  <td>{user.email}</td>
                                  <td>{user.password}</td>
                              </tr>
                          )
                      }
                  </tbody>
              </table>
          </div>
      </div>
    )
  }
}
export default ListUser;