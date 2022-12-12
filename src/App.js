
import './App.css';
import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Navbar from './Navbar';
// import {useState} from 'react';
// import './all.css.';
// import './fontawesome-free-6.1.2-web\css\all.css';
// import {BrowserRouter as Router,Route ,Routes} from 'react-router-dom'

function App() {
  const [formState, setFormState] = React.useState({
    email: "",
    password: ""
  })
  const onChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    e.preventDefault();
    setFormState({
      ...formState,
      [type]: e.target.value
    })
  }
const getErrors = (): string[] => {
    const errors = [];
    if (!formState.username) errors.push("Name required");
    if (!formState.email) {
      errors.push("Email required");
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      errors.push("Invalid email");
    }
    if (!formState.password) errors.push("Password required");
    return errors;
  }
const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = getErrors();
    for (let error of errors) {
      alert(error);
    }
    if (errors.length) return;
    const response = await fetch('http://localhost:8000/api/v1/signin', {
      method: "post",
      headers: {
      },
      body: JSON.stringify({
        email: formState.email,
        password: formState.password
      })
    })
    if (response.status !== 200) {
      return alert("Something went wrong.");
    }
  }
  return (
    
    <form action={""} method="POST" target="_black">
      <Navbar/>
      <br></br>
    <div className='div1'>
      <p className='class1'>Login</p>
      <br/>
      <input className='input1' type="email" placeholder="  Email *" required/>
      <br></br>
      <br></br>
      <input class="input1" type="password" placeholder="  Password *"  required />
      <h5>Forget your password?</h5>
      <input class="button1" type="submit" value="Log in"/>
      <span><input class="checkbox" type="checkbox"/> Remember me</span>
      <br></br>
      <br></br>
      <fieldset>
        <legend>or</legend>
    </fieldset>
    <button href="www.google.com" className="Google"><i class="fab fa-google"></i> Log in with Google</button>
    <br></br>
    <p class="class2">Not yet a customer?</p>
    <br></br>
    </div>
    </form>

  );
}

export default App;
