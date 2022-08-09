import React from 'react'
import { Link } from 'react-router-dom'
import InternalHeader from '../InternalHeader/InternalHeader'
import './Register.css'
import { useParams,useHistory } from 'react-router-dom'
export default function Register() {

  const history=useHistory();
  const params=useParams();
  const handleChangeLogin =()=>{
    history.push("/login")
  }
  
  return (
    <>
    {/* <InternalHeader/> */}
    <InternalHeader/>
     <div className='register'>
        <div className='container'>
      <div className='link3'><span>&lt;</span><Link to='/login'> Back</Link></div>
            <div className='content '>
             
                <div className='rightRigister'>
                  <h1>CREATE ACCOUNT </h1>
                  <h2>Login to your account for a faster checkout process</h2>
                  <form >
                    <input type="text" className='form-control' placeholder='Enter Name'/>
                    {/* <span className='validation'>This field is required</span> */}
                    <input type="text" className='form-control' placeholder='Enter Email'/>
                     {/* <span className='validation'>This field is required</span> */}
                    <input type="number" className='form-control' placeholder='Phone'/>
                     {/* <span className='validation'>This field is required</span> */}
                    <input type="password" className='form-control' placeholder='Enter Password'/>
                    {/* <span className='validation'>This field is required</span> */}
                    
                    <button className='btn button2Register'>Create Account</button>
                  </form>
                </div>
                <div className='left'>
                  <div className='imgbg d-flex'>
                    <h1>Don’t Have An <br/> Account?</h1>
                    <p>No Problem, Create an Account &amp; Enjoy;</p>
                    <ul>
                      <li>// Fast &amp; Easy checkout</li>
                      <li>// Order Tracking</li>
                      <li>// Installments Tracking</li>
                    </ul>
                    <button  onClick={()=>handleChangeLogin()} className='btn btn-light border-2 button1'>Login To My Account</button>
                  </div>
                </div>
            </div>
        </div>
        
    </div>
            <footer className='footerRegister'>
              <p>Any personal information you give us will be handled according to our <a href=''>Privacy Policy</a></p>
                
            </footer>
            </>
  )
}
