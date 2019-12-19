// import react ,{Component} from 'react';
// import {container, Button} from 'react-bootstrap';
// import Listusers from './Listusers';
// import Addusers from './Addusers';
// import axios from 'axios';
// import Axios from 'axios';
// const apiUrl = 'http://';



// class UserActionApp extends component{
//     constructor(props){
//         super(props);

//        this.state ={
//            isAddusers: false,
//            error: null,
//            response: {},
//            UserData: {},
//            isEdituser: false,
//            isUserDetails:true,
//        }
//        this.onFormsubmit = this.onFormsubmit.bind(this);
//   }
  
//   onCreate(){
//       this.setState({isAddUser: true});
//       this.setState({ isUserDetails: false});
//   }
//   onDetails(){
//       this.setState({isUserDetails: true});
//       this.setState({ isAddusers: false});
//   }
//   onFormsubmit(data){
//       this.setState({isAddusers: true}) 
//       this.setState({isUserDetails: false});
//       if (this.state.isEdituser){
//         Axios.put(apiurl + 'UpdateEmployeeDetails', data) .then(result=> {
//             alert(result.data);
//         this.setState({
//             response:result,
//             isAddusers: false,
//             isEdituser: false
//         })
//         });
//       }else {
//            axios.post(apiurl + 'InsertUserDetails', data).then(result =>{
//                alert(result.data);
//                this.setState({
//                    response: result,
//                    isAddusers: false,
//                    isEditusers: false

//                })
//            });
//       }
//   }
//   editUsers  = UserId =>{
//   this.setState({isUserDetails:false});
//   Axios.get(apiurl + "GetuserDetailsById/"+ userId).then(result =>{
//       this.setState({
//         isEdituser: true,
//         isAddUser: true,
//         userData: result.data
//       })
//   },
//   (error)=> {
//       this.setState({error});
//   }
  
//   )
// }
// render(){
//     let userForm;
//     if( this.state.isAddUser || this.state.isEditUser){
//         userForm = <Addusers onFormSubmit={this.onFormSubmit} user=
//         {this.state.userData}/>
//     }
//     return(

    
//          <div className="App">  
//  <Container>  
//         <h1 style={{ textAlign: 'center' }}>CURD operation in React</h1>  
//         <hr></hr>  
//         {!this.state.isUserDetails && <Button variant="primary" onClick={() => this.onDetails()}> User Details</Button>}  
//         {!this.state.isAddUser && <Button variant="primary" onClick={() => this.onCreate()}>Add User</Button>}  
//         <br></br>  
//         {!this.state.isAddUser && <UserList editUser={this.editUser} />}  
//         {userForm}  
//         </Container>  
//       </div>  
//     );  
//   }  
    
// }
// export default UserActionApp;