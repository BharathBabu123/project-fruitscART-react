import React from 'react';
import {  Link } from 'react-router-dom';
import axios from 'axios';

class Edituser extends React.Component {
constructor(props){
  super(props)
 // fetch("http://localhost:4000/customers").then(res=>res.json()).then(result=>{
      // this.State({
      //   customers:result
      //  )
  // })
  

this.state={
  customers:[]
}
};

componentDidMount() {
  axios.put('http://localhost:4000/customers/edit')
    .then(res => {
      //   console.log( res)
      this.setState({
        customers: res.data
      });
    })
    .catch((error) => {
      console.log(error);
    })
}

DataTable() {
  return this.state.customers.map((res, i) => {
    return <customersTableRow obj={res} key={i} />;
  });
}


    render (){

      const customers = this.state.customers;

  return (
    <div className="Edituser">
  <div className="row">
        <div className="col-md-6 login-container">
          <h2 style={{margin: 'auto'}}>Edituser</h2>
          <form >
            <div className="form-group">
              <label htmlFor="name">name:</label>
              <input type="text" className="form-control" formcontrolname="name" id="name" autoComplete="off" />
              {/* <div className="error" *ngif="loginForm.controls['username'].hasError('required') && loginForm.controls['username'].touched">Username is required</div> */}
            </div>
            <div className="form-group">
              <label htmlFor="phn">phone:</label>
              <input type="phone" className="form-control" formcontrolname="phone" id="pwd" autoComplete="off" />
              {/* <div className="error" *ngif="loginForm.controls['password'].hasError('required') && loginForm.controls['password'].touched">Password is required</div> */}
            </div>


            <div className="form-group">
              <label htmlFor="email">email:</label>
              <input type="email" className="form-control" formcontrolname="email" id="email" autoComplete="off" />
              
            </div>



            {/* <button className="btn btn-success" >Login</button> */}
            <Link to="/Listusers" className="btn btn-link">Edituser</Link>
            {/* <div class="text-right"> */}
            {/* </div> */}
            {/* <div *ngif="invalidLogin" className="error">
              <div>Invalid credentials.</div>
            </div> */}
          </form>
        </div>
      </div>

       
      </div>
      
      

    );
}
}
    export default Edituser ;