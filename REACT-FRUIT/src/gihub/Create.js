import React,{Component} from 'react';
import User from './User'
// import './Appo.css';
import Loading from './Loading'
import Header from './Header';
class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      loading: false
    }
  }
  getUser = () => {
    this.setState({
      loading: true
    })
    const name = this.refs.name.value;

    setTimeout( () => {
      fetch(`http://api.github.com/users/${name}`)
      .then(response => response.json())
      .then(data => {

        this.setState({
          user: data,
          loading: false
        });
      })
    },1000)
  }
  render() {   
    const name = this.state.user.name 
    let userProfile;
    if( this.state.loading === true)  {
       userProfile = <div className='loading-user-card'><Loading /></div>
    }else if (name ) {
      userProfile = <User user={this.state.user} />
    }
    return (
      <div className="App">
        <Header />
        <div className="wrapper">
          <div id='search-bar'>
            <input type="text" placeholder='Enter UserName' ref="name" />
            <button className='searchButton' onClick={this.getUser}> SEARCH
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        {userProfile}
      </div>
    );
  }
}

export default Create;