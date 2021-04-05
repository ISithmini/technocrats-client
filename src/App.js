import React from 'react';
import Home from './Containers/Home';
//import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Components/LoginComponent/Login';
import AuthContextProvider from './context/AuthContext';
import CreateAccount from './Components/RegisterComponent/CreateAccount';
import RouteLock from './helpers/RouteLock';
import './App.css';
import Unauthorized from './helpers/Unauthorized';
import JobSearch from './Containers/JobSearch';
import NavBarComponent from './Components/NavBarComponent/NavBarComponent';
import Dashboard from './Containers/Dashboard';
import Profile from './Components/ProfileComponent/Profile';
import JobFormComponent from './Components/JobComponents/JobFormComponent/JobFormComponent';
import ChatModule from './Components/ChatComponent/subcomponents/ChatModule'
import Advertisements from './Components/AdvertisementComponent/Advertisements'
import EditProfileComponent from './Components/EditProfileComponent/EditProfileComponent';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>
          <NavBarComponent/>
          <Switch> 
            <Route path='/' exact component={ Home }/>
            <Route path='/myprofile'  component={ Profile }/>
            <Route path='/edit-profile'  component={ EditProfileComponent }/>
            <Route path='/login' exact component={ Login }/>
            <Route path='/register' exact component={ CreateAccount }/>
            <Route path='/jobs' exact component={ JobSearch }/>
            <Route path='/post-a-job' exact component={ JobFormComponent }/>
            <RouteLock 
              path='/dashboard'
              redirect='./unauthorized'  
              Component={ Dashboard } 
              permissionCode={['P0001']}/>
            <Route path='/unauthorized' component={ Unauthorized }/>
            <Route path="/myChats" exact component={ ChatModule } />
            <Route path="/advertisements" component={Advertisements} />
          </Switch>
        </AuthContextProvider>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
