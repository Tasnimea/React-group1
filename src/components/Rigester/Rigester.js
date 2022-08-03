import React from 'react';
import "./Rigester.css"
import FacebookIcon from './icons8-facebook (1).svg';
import { Link } from 'react-router-dom';

const Rigester = () => {
    return (
    <>
    
    <div className='row m-y-lg one p-3'>
            <h1 className='text-center mt-8 mb-8 f-28 f-500'> Create Your Account</h1>
        </div>
        <div id='main' className="d-flex justify-content-center">

<i id='googleIcon' class="fa-brands fa-google"></i>
<button id='RigBtn1' className='btngoogle' >
    Continue wih google

</button>
</div>
<br></br>
<div className="d-flex justify-content-around ffff">
<img id='img2' className='icon2' src={FacebookIcon} alt="" />

<button id='btn2' className='btnfacebook' >Continue wih Facebook</button>
</div>
<div className='container d-flex justify-content-center'>
          

          <div className='row p-3'>
        <label className='col-12 col-sm-4'> First Name</label>
        <input type="text" className='col-12  col-sm-8 ' size={80} placeholder="First Name" />
          </div>
          </div>
          <div className='container d-flex justify-content-center '>

<div className='row p-3'>
<label className='col-12 col-sm-4'> Last Name</label>
<input type="text" className='col-12  col-sm-8 ' size={80} placeholder="Last Name" />
</div>
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
<div className='container d-flex justify-content-center '>

<div className='row p-3'>
<label className='col-12 col-sm-4'>confirm Password</label>
<input type="password" className='col-12  col-sm-8 ' size={73} placeholder=" confirm Password" />
</div>
</div>
<div className='container d-flex justify-content-center '>

<div id='gender' className='row p-3'>
<label id='label1' className='col-12 col-sm-4 '>Gender</label>
<div  className="btn-group col-12  col-sm-8 " role="group" aria-label="Basic radio toggle button group">
<input   type="radio" class="btn-check " name="btnradio" id="btnradio1" autocomplete="off" checked/>
<label  className="btn btn-outline-primary " for="btnradio1">male</label>

<input  type="radio"  size={80} class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
<label className="btn btn-outline-primary" for="btnradio2">female</label>


</div>

{/* <input type="password" className='col-12  col-sm-8 ' size={73} placeholder=" confirm Password" /> */}
</div>
</div>
<div className='container d-flex justify-content-center '>

<div className='row p-3'>
<label className='col-12 col-sm-4'>Date of bitrh</label>
<input type="text" className='col-12  col-sm-8 ' size={79} placeholder="date of birth" />
</div>
</div>

<div id='check1' className='container d-flex justify-content-start m-l-5'>

<div  class="form-check">
<input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
<label class="form-check-label" for="defaultCheck1">
Subscribe <br></br>to our Newsletter
</label>
</div>
</div>
<div id='check2' className='container d-flex justify-content-start '>

<div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
<label class="form-check-label" for="defaultCheck1">
Subscribe to<br></br> SMS
</label>
</div>
</div>
<div className='container d-flex justify-content-center '>

<div className='row p-3'>
<p id='para'> By creating an account you agree to the <span id='sp1'>Privacy Policy</span> and to the <span id='sp2'>terms of use</span></p>

</div>
</div>
{/* <div className='container d-flex justify-content-center '>

<div className='row p-3'>
<button id='createBt'>Create Your Account</button>
</div>
</div> */}
<div className='container d-flex justify-content-center '>

<div className='row p-3'>
<button id='createBb' className='btn-xl'>Create Account</button>
</div>
</div>
<div className='container d-flex justify-content-center '>

<div className='row p-3'>
<p> Already have an account? <Link to={"/Login"}><span id='sp2'>Login</span></Link></p>

</div>
</div>

    
    
    
    
    
    
    
    
    
    
    
    </>
    );
}

export default Rigester;
