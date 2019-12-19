import React,{Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
            email:'',
            password:'',
            FormErrors:{
                    email:'',
                    password:''
            }
    }
}
changeHandler =event => {
    this.setState({[event.target.name] : event.target.value})
}
handleSubmit = event=>{
    event.preventDefault();
    console.log("in");

    axios.post('http://localhost:4000/customers/login',this.state)
    .then(res=>{
            console.log(res)
            if((res.data.token)!=="INVALIDE AUTHORIZATION"){
                    localStorage.setItem('token',res.data.token);
                    console.log(res.data);
                    alert('SucseFully Token Genarated');
                    this.props.history.push('/Home')
            }else{

                    alert('INVALIDE USER-NAME AND PASSWORD')
            }
            
          
    })
    .catch(err=>{
          console.error(err)
    })   
}
    render (){
  
  return (
    <div className="Login">
  
      <div>
        <div>
      

      <div className="row">
        <div className="col-md-6 login-container">
          <h2 style={{margin: 'auto'}}>Login </h2>
          <form onSubmit={this.handleSubmit}>
            <div >
              <label htmlFor="username">email:</label>
              <input type="text" className="form-control" onChange={this.changeHandler}  name="email" autoComplete="off" />
              {/* <div className="error" *ngif="loginForm.controls['username'].hasError('required') && loginForm.controls['username'].touched">Username is required</div> */}
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Password:</label>
              <input type="password" className="form-control" onChange={this.changeHandler}  name="password" autoComplete="off" />
              
            </div>
            <button className="btn btn-link">Login</button>
          </form>
        </div>
      </div>

       
      </div>
      </div>
      </div>

        );
  }
  }
        export default Login ;