import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

import Login from './components/Login';
import FriendList from './components/FriendList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (  
    <div className='App'>

      <header>
        <h2>FRIENDS DATABASE</h2>
        <div className='links'>
          <Link className='header-link' to='login' >Login.</Link>
        &nbsp;
        <Link className='header-link' to="friends"> FriendList.</Link>
        &nbsp;
        <Link className='header-link' to='friends/add' >AddFriend.</Link>
        &nbsp;
        <Link className='header-link' to='/logout' >Logout.</Link>
        </div>
        
      </header>
      
      

    <Routes>  
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/login' element={<Login/>}/>

      {/* Private Routes */}
      <Route element={<PrivateRoute />}>
        <Route exact path='/friends' element={<FriendList/>} />  
        <Route exact path='/friends/add' element={<AddFriend/>} />
        <Route exact path='/logout' element={<Logout/>} />
      </Route>  
      {/* Private Routes */}
    </Routes>
    </div>
  );
}

export default App;
