import { useState} from 'react';
import { useNavigate } from "react-router-dom";
import { login } from '../../config/firebase';

function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
 
  const signin = () => {
    login({email, password})
   
  }


  return (
    <>
    
      <div className="loginbodydiv"> 
      <div className='loginimge'>
        <img src='https://scontent.fkhi28-1.fna.fbcdn.net/v/t31.18172-8/11127561_927194317311202_8576484707969385855_o.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=9a8829&_nc_ohc=oXS0KQmrAUYAX_5YUHs&_nc_ht=scontent.fkhi28-1.fna&oh=00_AfA1Lbkfed0blSMf-xVp_l2Jcut_dxBL5rU7IfxE_Ph7Vg&oe=65DB88C8' />
      </div>
       <div className="wrapper">
    <div className="formdiv">
   
      <h2>Login</h2>
        <div className="input-field">
        <input type="email" onChange={(e) => setEmail(e.target.value)} required />
        <label>Enter your email</label>
      </div>
      <div className="input-field">
        <input type="password" onChange={(e) => setPassword(e.target.value)}  required />
        <label>Enter your password</label>
      </div>
      <div className="forget">
        <label >
          <input type="checkbox" id="remember" />
          <p>Remember me</p>
        </label>
        <a href="">Forgot password?</a>
      </div>
      <button onClick={signin}>Log In</button>
      <div className="register">
        <p>Don't have an account? <span onClick={() => navigate("/register")}>Register</span></p>
      </div>
    </div>
  </div>

  </div>

      </>

);
}

export default Login;