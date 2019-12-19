import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/Navbar';
//  import Banner from './banner/Banner';
import Home from './Bodyreact/Home';
import Services from './Bodyreact/Services';
import Login from './login/Login';
import Axiosinterceptor from './login/Axiosinterceptor';
import { BrowserRouter,Route} from 'react-router-dom' ;
// import Footer from './footer/Footer';
import Gallery from './Bodyreact/Gallery';
import Blog  from './Bodyreact/Blog';
import Register from './register/Register';
import Listusers from './users/Listusers';
import Editusers from './users/Editusers';
import Addusers from './users/Addusers';
import About from './Bodyreact/About';
import Create from './gihub/Create';


function App() {
  return (
    
    
    <BrowserRouter>  
    <div className="App">   
     
    <Navbar/>
      {/* <Banner /> */}
      <Route path="/Login" component={Login}/>
      <Route path="/Register" component={Register}/>
      <Route path="/Home" exact strict component={Home}/>
      
      <Route path="/About" component={About}/>
      <Route path="/Blog" component={Blog}/>
     
      <Route path="/Gallery" component={Gallery}/>
      <Route path="/Services" component={Services}/>
      
      <Route path="/Create" component={Create}/>
     
      <Route path="/Addusers" component={Addusers}/>
      <Route path="/Listusers" component={Listusers}/>
      <Route path="/Editusers" component={Editusers}/>
      <Route path="/Create" component={Create}/>
      
    </div>
    </BrowserRouter>




  );
}

export default App;
