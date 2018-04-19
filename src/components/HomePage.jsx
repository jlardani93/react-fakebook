import React from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'

export default class HomePage extends React.Component {

  _selectedUser: null;

  constructor(props){
    super(props)
    this.state = {
      redirect: false,
      users: [
        {
          name: 'Justin Lardani',
          employer: 'Epicodus',
          city: 'Seattle',
          imgUrl: 'https://vignette.wikia.nocookie.net/pokemon/images/1/19/Ash_Bulbasaur.png/revision/latest?cb=20170914224503'
        },
        {
          name: 'Ernest Bruno',
          employer: 'Epicodus',
          city: 'Seattle',
          imgUrl:
          'https://vignette.wikia.nocookie.net/pokemon/images/3/3b/Gavin_Machamp.png/revision/latest?cb=20150703034013'
        },
        {
          name: 'Alex Neumann',
          employer: 'Epicodus',
          city: 'Seattle',
          imgUrl: 'http://www.hardcoregamer.com/wp-content/uploads/2016/03/tyranitar.png'
        }
      ]
    }
    this.onSetCurrentUser = props.onSetCurrentUser.bind(this);
    this.handleUserNavigation = this.handleUserNavigation.bind(this);
    this.handleCreateNewUser = this.handleCreateNewUser.bind(this);
  }

  handleUserNavigation(){
    event.preventDefault();
    let userIndex = this._selectedUser.value;
    this.onSetCurrentUser(Object.assign(this.state.users[userIndex]));
    this.setState({redirect: true});
  }

  handleCreateNewUser(user){
    let myUsers = this.state.users.slice();
    myUsers.push(user);
    this.onSetCurrentUser(Object.assign(user));
    this.setState({users: myUsers});
    this.setState({redirect: true}); 
  }

  onSetCurrentUser;

  render(){
    if (this.state.redirect) {
      return <Redirect push to="/User/Display" />;
    }
    return(
      <div className='main'>
        <div>
          <label>Select Existing User</label>
          <form onSubmit={this.handleUserNavigation}>
            <select name="users"
              ref={(input)=>{this._selectedUser = input}}
              >
              {this.state.users.map((user, index)=>
                <option
                  value={index}
                  key={index}
                  >{user.name}</option>
              )}
            </select>
            <button type="submit">Navigate To User's Page</button>
          </form>
        </div>
        <div>
          <Link to="/User/Create"><button>Create a New User</button></Link>
        </div>
      </div>
    )
  }
}
