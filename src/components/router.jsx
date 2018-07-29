import React from 'react'
import {Router,
Route} from 'react-router-dom'
import Voting from './voting'
import SignIn from './SignIn'
import createBrowserHistory from 'history/createBrowserHistory'
const hist= createBrowserHistory();
export default class Routeer extends React.Component {
  render() {
    return (
      <div>
        <Router history={hist}>
        <div>
            <Route exact path='/' component={SignIn}/>
           <Route path='/voting/:user' component={Voting}/>
            </div>
        </Router>
      </div>
    )
  }
}
