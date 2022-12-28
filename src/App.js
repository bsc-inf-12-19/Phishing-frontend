import './App.css';
import Navbar from './Navbar';
import {useState} from 'react';
import axios from 'axios';
import {onSubmit} from 'react';
import {handleSubmit} from 'react'
function App() {
  const[Email,setEmail] = useState('')
  const[password,setPassword] = useState('')

  axios({
    url: "http://localhost:8080/api/v1/login",
    method: "POST",
    headers: {
    },
  })

  return (
    <div class="container">
      <form
        onSubmit={(e) => {
        handleSubmit(onSubmit)(e)
         .catch(() => {});
        }}>
        <Navbar/>
           <br></br>
           <br></br>
        <div className='div1'>
           <p className='class1'>Login</p>
           <br/>
        <input class='input1' style={{height:"35%"}} type="email" placeholder="  Email *" required value={Email}
                  onChange = {(e) => setEmail(e.target.value)}/>
           <br></br>
           <br></br>
       <input class="input1" style={{height:"35%"}} type="password" placeholder="  Password *" required value={password}
                  onChange ={(e) => setPassword(e.target.value)}/>

         <h5>Forget your password?</h5>
        <button class="button2" style={{height:"25%"}}><img class="logo" alt='google logo' src="login.svg"/><span> Log in</span></button>
         <span class="span1"><input class="checkbox" type="checkbox"/> Remember me</span>
           <br></br>
        <fieldset>
          <legend> or </legend>
        </fieldset>
          <br></br>
        <button href="www.google.com" class ="Google" style={{height:"25%"}}><img class="logo" alt='google logo'src="google.svg"/> Log in with Google</button>
          <br></br>
          <div>
        <p class="class2">Not yet a customer?</p>
          </div>
         <br></br>
        </div>  
      </form>
    </div>

  );
}

export default App;
