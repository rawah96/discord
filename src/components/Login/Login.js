import React, {useState} from 'react'
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../../utils/refreshToken';
import discord from './discord.png'
import './Login.css'

const clientId = "304788118855-l4frhratrtujhhlkq20482an60okom01.apps.googleusercontent.com"
const onSuccess = (res) => {
    // alert(
    //   `in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    // );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    // alert(
    //   `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    // );
  };

export function Login() {
  const [name, setName] = useState('');
  const handleName = (res) => {
    // console.log(res.profileObj.name)
    setName(res.profileObj.name);
  }

    return (
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
    )
}

// export default Login