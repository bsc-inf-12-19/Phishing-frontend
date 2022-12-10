
//import './App.css';
import {BrowserRouter as Router,Route ,Routes} from 'react-router-dom'

function App() {
  return (
    <form>
    <div className='div1'>
      <p className='class1'>Login</p>
      <br/>
      <input className='input1' type="email" placeholder='Email*' required/>
      <br></br>
      <br></br>
      <input class="input1" type="password" placeholder=" Password*" required />
      <h5>Forget your password?</h5>
      <input class="button1" type="submit" value="Log in"/>
      <span><input class="checkbox" type="checkbox"/> Remember me</span>
      <br></br>
      <br></br>
      <fieldset>
        <legend>or</legend>
    </fieldset>
    <button class="Google"><i class="fab fa-google"></i> Log in with Google</button>
    <br></br>
    <p class="class2">Not yet a customer?</p>
    <br></br>
    </div>
    </form>

  );
}

export default App;
