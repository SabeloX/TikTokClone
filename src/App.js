import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import SignIn from './auth/SignIn';
import { auth } from './firebase';

function App() {

  const [user, setUser] = useState()
  const [loading, setLoading] = useState()

  useEffect(() => {
    auth.onAuthStateChanged( user => {
      setUser(user)
      setLoading(false)
    })
    console.log(user)
  }, [])

  return (
    <div className="app">
      <Router>
        {!loading &&
          <Switch>
            <Route exact path='/' render={() => {
              return user ? 
                <Dashboard/> : 
                <Redirect to='/signin'/>
            }}/>
            <Route path='/signin' component={SignIn}/>
          </Switch>
        }
      </Router>
    </div>
  );
}

export default App;
