import React from 'react';
import Home from './Components/HomeComponents/Home';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Components/LoginComponent/Login';
import AuthContextProvider from './context/AuthContext';
import CreateAccount from './Components/RegisterComponent/CreateAccount';
import RouteLock from './helpers/RouteLock';
import Dashboard from './Components/Dashboard/Dashboard';
import Unauthorized from './helpers/Unauthorized';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>
          <Navbar/>
          <Switch>
            <Route path='/' exact component={ Home }/>
            <Route path='/login' exact component={ Login }/>
            <Route path='/register' exact component={ CreateAccount }/>
            <Route 
              path='/dashboard' 
              render = {props => (
                <RouteLock 
                  {...props} 
                  Component={ Dashboard } 
                  path='dashboard' 
                  resource='dashboard' permission='dashboardAccess'/>
              )}/>
            <Route path='/unauthorized' component={ Unauthorized }/>
          </Switch>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
