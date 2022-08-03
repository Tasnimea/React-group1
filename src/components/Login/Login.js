import React from 'react';
import "./Login.css"
// import GoogleIcon from './icons8-google (1).svg';
import FacebookIcon from './icons8-facebook (1).svg';
import { Link } from 'react-router-dom';



const Login = () => {
    return (
      <>
              <div className='row m-y-lg one p-3'>
            <h1 className='text-center mt-8 mb-8 f-28 f-500'> Login</h1>
        </div>
        <div id='main' className="d-flex justify-content-center">
{/* <img id='img1' className='icon' src={GoogleIcon} alt="" /> */}
{/* <FontAwesomeIcon icon="fa-brands fa-google" /> */}
<i id='googleIcon' class="fa-brands fa-google"></i>
<button id='btn1' className='btngoogle' >
    Continue wih google

</button>
</div>
<br></br>
<div className="d-flex justify-content-around ffff">
<img id='img2' className='icon2' src={FacebookIcon} alt="" />

<button id='btn2' className='btnfacebook' >Continue wih Facebook</button>
</div>
      
   
      
        <div className='container d-flex justify-content-center '>

          <div className='row p-3'>
        <label className='col-12 col-sm-4'> Email</label>
        <input type="emal" className='col-12  col-sm-8 ' size={85} placeholder="Email" />
          </div>
          </div>
        <div className='container d-flex justify-content-center '>

          <div className='row p-3'>
        <label className='col-12 col-sm-4'> Password</label>
        <input type="password" className='col-12  col-sm-8 ' size={81} placeholder="Password" />
          </div>
          </div>


<div id='check2' className='container d-flex justify-content-start '>

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
  <label class="form-check-label" for="defaultCheck1">
  Keep Me logged in
  </label>
</div>
</div>

<div className='container d-flex justify-content-center '>

<div className='row p-3'>
<button id='createB' className='btn-xl'>Login</button>
</div>
</div>
<div className='container d-flex justify-content-center '>

<div className='row p-3'>
<p> Don't have an account? <Link to={"/Rigester"}><span id='sp2'>Create an account</span></Link></p>

</div>
</div>
       

          </>
          

        
    );
}

export default Login;
