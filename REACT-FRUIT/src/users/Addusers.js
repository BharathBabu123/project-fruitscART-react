import React from  'react';
import {  Link } from 'react-router-dom';
import axios from 'axios';


class Addusers extends React.Component {
  constructor(props){
    super(props)
 this.state = {
    id:'',
    email:'',
    phone:''
    // name: '',
    // email:'',
    // phone:''
   }
  }
  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();

    // const user = {
    //   name: this.state.name,
    // email: this.state.email,
    // phone: this.state.phone
    // };
     console.log(this.state)
     axios.post('http://localhost:4000/customers/add',this.state)
    
    .then(res => console.log(res.data));
    this.props.history.push('/Listusers')

    
  }
  render (){
  
    return (
      <div className="Addusers">
  
  
        <div className="col-md-6 login-container">
          <h2 style={{margin: 'auto'}}>Addusers</h2>
          <form onSubmit={this.handleSubmit}>

            <div className="form-group">
              <label htmlFor="name">name:</label>
              <input type="text" className="form-control" onChange={this.handleChange} formcontrolname="name" name="id" autoComplete="off" />
              {/* <div className="error" *ngif="loginForm.controls['username'].hasError('required') && loginForm.controls['username'].touched">Username is required</div> */}
            </div>
            <div className="form-group">
              <label htmlFor="phn">phone:</label>
              <input type="phone" className="form-control" onChange={this.handleChange} formcontrolname="phone" name="phone" autoComplete="off" />
              {/* <div className="error" *ngif="loginForm.controls['password'].hasError('required') && loginForm.controls['password'].touched">Password is required</div> */}
            </div>


            <div className="form-group">
              <label htmlFor="email">email:</label>
              <input type="email" className="form-control" onChange={this.handleChange} formcontrolname="email" name="email" autoComplete="off" />
              
            </div>



            <button className="btn btn-success" >ADD USER</button>
            {/* <Link to="Listusers" className="btn btn-link" >Addusers</Link> */}



            {/* <div class="text-right"> */}
            {/* </div> */}
            {/* <div *ngif="invalidLogin" className="error">
              <div>Invalid credentials.</div>
            </div> */}
          </form>
      
    

        
      
    </div>
</div>




        
    

    );
    
}
}

    export default Addusers ;