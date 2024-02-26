import { useNavigate } from "react-router-dom"
import { useState} from 'react';
import { register } from "../../config/firebase";

function Register(){
   
    const navigate = useNavigate();
    const [fullname, setFullname] = useState()
    const [age, setAge] = useState()
    const [email, setEmail] = useState()
    const [userDp, setUserDp] = useState()
    const [password, setPassword] = useState()

    
    const signup = () => {
        register({ email, password, age, fullname, userDp })
       
        }


    return(
        <>
        <div className="loginbodydiv"> 
      <div className='loginimge'>
        <img src='https://scontent.fkhi28-1.fna.fbcdn.net/v/t31.18172-8/11127561_927194317311202_8576484707969385855_o.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=9a8829&_nc_ohc=oXS0KQmrAUYAX_5YUHs&_nc_ht=scontent.fkhi28-1.fna&oh=00_AfA1Lbkfed0blSMf-xVp_l2Jcut_dxBL5rU7IfxE_Ph7Vg&oe=65DB88C8' />
      </div>
       <div class="wrapper">
    <div className="formdiv">
   
      <h2>Register</h2>
        <div class="input-field">
        <input type="text" onChange={(e) => setFullname(e.target.value)} required />
        <label>Enter your Name</label>
      </div>
      <div class="input-field">
        <input type="email" onChange={(e) => setEmail(e.target.value)} required />
        <label>Enter your email</label>
      </div>
      <div class="input-field">
        <input type="number" onChange={(e) => setAge(e.target.value)}  required />
        <label>Enter your age</label>
      </div>
      <div class="input-field">
        <input type="password" onChange={(e) => setPassword(e.target.value)} required />
        <label>Enter your password</label>
      </div>
      <div class="input-field">
      <input type="file" onChange={(e) => setUserDp(e.target.files[0])} />
        
      </div>
      <div class="forget">
        <label for="remember">
          <input type="checkbox" id="remember" />
          <p>I'm not a Robot</p>
        </label>
        
      </div>
      <button onClick={signup}>Register</button>
      <div class="register">
        <p>Already have an account <span onClick={() => navigate("/login")}>Login</span></p>
      </div>
    </div>
  </div>

  </div>
        
        </>
    )
}

export default Register;