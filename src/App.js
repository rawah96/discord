import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import Chat from './components/Chat/Chat'
import {selectUser, logout} from './features/userSlice'
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from './utils/refreshToken';
import './components/Login/Login.css'
import discord from './discord.png'
import {In, out} from './features/userSlice'

const clientId = "304788118855-l4frhratrtujhhlkq20482an60okom01.apps.googleusercontent.com"
const onSuccess = (res) => {
  refreshTokenSetup(res);
};

const onFailure = (res) => {
};

function App() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  // dispatch ==> push things into the data layer
  const user = useSelector(selectUser);
  
  const handleName = (res) => {
    setName(res.profileObj.name);
  }

  useEffect(() => {
    if(name) {
      dispatch(In({
        displayName: name,
        // get id
        // get photo url
        // get email
      }))
    } else {
      console.log('not signed in')
    }
  }, [name])

  return (
    <div className="App">
      {user ? <>
        <Sidebar />
        <Chat />
      </>:<>
      <div className="login">
          <img src={discord} alt=""/>
        <GoogleLogin
          className="signin"
          clientId={clientId}
        // buttonText="Login"
          onSuccess={handleName}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true} 
        />
        {/* {name ? <h1 id="logged">Logged in as {name}</h1> : null} */}
        </div>
      </>}      
    </div>
  );
}

export default App;
