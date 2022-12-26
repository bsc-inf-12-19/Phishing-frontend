import React from 'react';
import './App.css';
import Navbar from './Navbar';
import {useState} from 'react';
// import PropTypes from 'prop-types';
// import Service from "./Service"
function App() {
  const[Email,setEmail] = useState('')
  const[password,setPassword] = useState('')

  // const [formState, setFormState] = React.useState({
 
  //   const response = await fetch('http://localhost:8000', {
  //     method: "post",
  //     headers: {
  //     },
  //     body: JSON.stringify({
  //       email: formState.email,
  //       password: formState.password
  //     })
  //   })
  return (
    <div class="container">
      <form>
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
        {/* <br></br> */}
        <button class="button2" style={{height:"25%"}}><img class="logo" alt='google logo' src="login.svg"/><span> Log in</span></button>
        <span class="span1"><input class="checkbox" type="checkbox"/> Remember me</span>
         <br></br>
      <fieldset>
        <legend> or </legend>
      </fieldset>
      <br></br>
       <button href="www.google.com" class ="Google" style={{height:"25%"}}><img class="logo" alt='google logo' src="google.svg"/> Log in with Google</button>
        <br></br>
      <p class="class2">Not yet a customer?</p>
        <br></br>
       </div>
     </form>
     </div>

  );
}

export default App;
