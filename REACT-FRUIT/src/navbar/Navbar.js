import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Navbar1 extends React.Component {

  render (){

return (
  <div className="Navbar">


<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <nav className="navbar navbar-inverse navbar-fixed-top">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
 
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
     
    <div id="logo">
          <h1>
            <a href="index.html">MOS</a>
          </h1>
        </div>
         {/* <div class="sub-headder position-relative">
          <h6>
            <a href="index.html">Mahith Organic
              <br/>Store</a>
          </h6>
        </div>  */}
        
     <li>
     <a href="Home" className="nav-item nav-link" > Home</a> 
      </li> 
    
      
     <li> 
       <a href="about" className="nav-item nav-link" >about</a>
     </li>

      <li>
      <a  href="Services" className="nav-item nav-link" >Services</a>
    </li>


      <li>
      <a  href="Gallery" className="nav-item nav-link" >Gallery </a>
    </li>

      <li>
      <a  href="Blog" className="nav-item nav-link" >Blog</a>
    </li>
  
    <li>
        {/* <label htmlFor="drop-2" className="toggle toogle-2">Admin <span lassName="nav-item nav-link" aria-hidden="true" />
        </label>
        <a href="Admin">Admin <span className="nav-item nav-link" aria-hidden="true" /></a>
        <input type="checkbox" id="drop-2" />
        <ul>
          <li><a href="Listusers">Listusers</a></li>
          <li><a href="Edituser">Edituser</a></li>
          <li><a href="Addusers">Addusers</a></li>
        
           </ul> */}
           <UncontrolledDropdown>
      <DropdownToggle caret>
        Dropdown
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem><a href="Listusers">Listusers</a></DropdownItem>
        
        <DropdownItem><a href="Addusers">Addusers</a></DropdownItem>
        {/* <DropdownItem divider /> */}
        <DropdownItem><a href="Edituser">Edituser</a></DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
      
     </li> 

  
  

<li>
<a  href="Create" className="nav-item nav-link" >github</a>
</li>

    <li>

      <a href="Login"  className="nav-item nav-link"> Login</a>
      </li>

      <li >
      <a href="Register" className="nav-item nav-link"> Register</a>
      </li>
       

    
    </div>
  </div>
</nav>
</nav>
</div>
        
      
          );
}

}

      export default Navbar1;