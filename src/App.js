import { Route, Switch } from 'react-router';
import './App.css';
import LandingPage from './component/pages/landing-page';
import Login from './component/pages/login';
import Pannel from './component/pages/pannel';
import  {Provider} from 'react-redux'
import store from './component/redux/store'
import signup from './component/pages/signup';
import GoogleLogin from 'react-google-login';
import { useState } from 'react';
function App() {
 const [user,setUser]=useState(false)
const responseGoogleSuccess=(response) =>{
  console.log(response)
  setUser(true)
}
const responseGoogle= (response) =>{
  console.log(response)
}
  return (
    <div className="App">
        <GoogleLogin
        clientId="688266698142-uecnpue519mo6jfurcskil0s3bgmm2g5.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogleSuccess}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      /> 
      {user? <div>Login Succesfull</div>: <div>login</div>}
    <Switch>

        <Route exact path="/" component={LandingPage}/>
        <Provider store={store} >
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={signup}/>
            <Route path="/pannel" component={Pannel}/>         
        </Provider>
      </Switch>
    </div>
  );
}

export default App;
