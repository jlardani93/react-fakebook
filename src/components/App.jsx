import React from 'react'
import Header from './Header'
import Footer from './Footer'
import HomePage from './HomePage'
import UserDisplay from './UserDisplay'
import UserCreate from './UserCreate'
import { Switch, Route } from 'react-router-dom'
import { Redirect } from 'react-router'

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      currentUser: null
    }
    this.handleSetCurrentUser = this.handleSetCurrentUser.bind(this);
  }

  handleSetCurrentUser(user){
    console.log("App component received the following user: ");
    console.log(user);
    this.setState({currentUser: user});
    console.log(this.state.currentUser);
  }

  render(){
    // if (this.state.redirect)
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" render={()=><HomePage onSetCurrentUser={this.handleSetCurrentUser} />} />
          <Route path="/User/Display" render={()=>
            {if (this.state.currentUser) {
                console.log(this.state.currentUser);
                return <UserDisplay user={this.state.currentUser}/>;
              } else {
                console.log(this.state.currentUser);
                return <div><h2>Current User is Null</h2></div>
              }
            }
          } />
          <Route path="/User/Create" component={UserCreate} />
        </Switch>
        <Footer />
      </div>
    )
  }
}
