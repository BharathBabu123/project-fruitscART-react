import React from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import {fetchposts} from '../actions/postAction'


class Listusers extends React.Component { 
 componentWillMount(){
//this.props.fetchposts();
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
    axios.get('http://localhost:4000/customers')
      .then(res => {
         console.log( res)
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
  <div className="Listusers">

            <div>
                <div className="container">
                    <div className="row">
                        <table className="table table-bordered">
                            <thead className="thead-light">
                                <tr>
                                <th scope="col">id</th>
                                    <th scope="col">name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Address</th>
                                    {/* <th scope="col">Description</th>,,,,,,,,,,,, key={customer.id} */}
                                    
                                </tr>
                            </thead>
                            <tbody>
                                { customers.map(customer =>
                                    <tr>
                                    <td>{customer.id}</td>
                                        <td>{customer.name}</td>
                                        {/* <td>{customer.last_name}</td> */}
                                        <td>{customer.email}</td>
                                        <td>{customer.phone}</td>
                                        <td>{customer.address}</td>
                                        {/* <td>{customer.description}</td> */}
                                        <td>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group" style={{ marginBottom: "20px" }}>
                                                    <Link to={`edituser/${customer.id}`} className="btn btn-sm btn-outline-secondary">Edituser </Link>
                                                    <button className="btn btn-sm btn-outline-secondary" onClick={() => this.deleteCustomer(customer.id)}>Delete Customer</button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
  </div>  
  );
}
}
export default Listusers;