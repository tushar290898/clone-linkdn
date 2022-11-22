import React, { useEffect } from 'react';
import Header from './Header';
import './App.css';
import Sidebar from './Sidebar';
import Feeds from './Feeds';
import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux'
import Login from './Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

import News from './News';


function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch();
 

  useEffect(() => {

    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [])

 

  return (
    <div className="app">
      

      {
        (!user) ?
          <Login /> :
          <div className='main'>
            <Header/>
            <div className='app-body'>
              <Sidebar />
              <Feeds />
              <News />
            </div>
          </div> 
          
      }


    </div>
  );
}

export default App;
