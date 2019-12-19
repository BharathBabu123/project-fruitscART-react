import react from 'react'
import axios from 'axios';
import React, { Component } from 'react'


axios.interceptors.request.use(function(config) {
      let token= localStorage.getItem('token');
      if ( token != null ) {
          config.headers.Authorization = `Bearer ${token}`;
      }
  
      return config;
  }, function(err) { 
      return Promise.reject(err);
  });
export class AxiousIntercepte extends Component {

      render() {
          let data=[1,2,4,5]
          this.props.name(data)
              return (
                      <div>
                              
                      </div>
              )
      }
}

export default AxiousIntercepte