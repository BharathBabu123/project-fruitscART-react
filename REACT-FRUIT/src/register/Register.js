import React ,{Component}from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Register extends React.Component {
constructor(){
  super()
  this.state={
   email:'',
   password:''
   
  }
//this.handleInputChange = this.handleInputChange.bind(this);
//this.handleSubmit = this.handleSubmit.bind(this);
  }
handleInputChange(e){
  this.setState({
    [e.target.name]:e.target.value
  })
}
handleInputChange(e){
  e.preventDefault();
  const user={
email:this.state.email,
password:this.state.password
  }
  this.props.registerUser(user,this.props.history);
  this.props.history.push('/Login')
}
componentWillReceiveProps(nextProps){
  if(nextProps.auth.isAuthenticated){
    
  }
  if(nextProps.errors){
    this.setState({
      erors:nextProps.errors
    
      
    });
  }
}
    render (){
  
  return (
    <div className="Register">
    
    
    <div>
        <div>
      <div className="row">
        <div className="col-md-6 login-container">
          <h2 style={{margin: 'auto'}}>Register </h2>
          <form  onSubmit={ this.handleSubmit } >
            <div className="form-group">
              <label htmlFor="email">email:</label>
              <input type="text" className="form-control" formcontrolname="email" id="email" autoComplete="on" />
              
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Password:</label>
              <input type="password" className="form-control" formcontrolname="password" id="pwd" autoComplete="off" />
            
            </div>
{/*             
            <div className="form-group">
              <label htmlFor="phn">phone:</label>
              <input type="phone" className="form-control" formcontrolname="phone" id="phn" autoComplete="off" />
            
            </div> */}
            <div className="form-group">
                        {/* <button className="btn btn-primary">Register</button> */}
                        
                        <button className="btn btn-link">Register</button>
                    </div>


            {/* <button className="btn btn-success" ><Link to="/Login" className="btn btn-link"> Submit</Link></button> */}
   
          </form>
        </div>
      </div>

       
      </div>
      </div>
      </div>

    );
}
}
    export default Register;