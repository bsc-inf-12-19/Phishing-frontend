import React from 'react';
import './App.css';
import Navbar from './Navbar';
// import {useState} from 'react';
function App() {

  // const [formState, setFormState] = React.useState({
 
  //   const response = await fetch('http://localhost:8000/api/v1/signin', {
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
        <input className='input1' type="email" placeholder="  Email *" required/>
         <br></br>
         <br></br>
       <input class="input1" type="password" placeholder="  Password *" required />
        <h5>Forget your password?</h5>
        <button class="button2"><img class="logo" alt='google logo' src="login.svg"/><span> Log in</span></button>
        <span><input class="checkbox" type="checkbox"/> Remember me</span>
         <br></br>
         <br></br>
      <fieldset>
        <legend>or</legend>
      </fieldset>
       <button href="www.google.com" className="Google"><img class="logo" alt='google logo' src="google.svg"/> Log in with Google</button>
        <br></br>
      <p class="class2">Not yet a customer?</p>
        <br></br>
       </div>
     </form>
     </div>

  );
}

export default App;
