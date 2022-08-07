import React from 'react'
import InternalHeader from '../InternalHeader/InternalHeader'
import './Register.css'
export default function Register() {
  return (
    <>
    {/* <InternalHeader/> */}
    <InternalHeader/>
     <div className='login'>
        <div className='container'>
      <div className='link3'><span>&lt;</span><a href='#'> Back</a></div>
            <div className='content '>
             
                <div className='rightRigister'>
                  <h1>CREATE ACCOUNT</h1>
                  <h2>Login to your account for a faster checkout process</h2>
                  <form >
                    <input type="text" className='form-control' placeholder='Enter Name'/>
                    {/* <span>This field is required</span> */}
                    <input type="text" className='form-control' placeholder='Enter Email'/>
                    {/* <span>This field is required</span> */}
                    <input type="number" className='form-control' placeholder='Phone'/>
                    {/* <span>This field is required</span> */}
                    <input type="password" className='form-control' placeholder='Enter Password'/>
                    {/* <span>This field is required</span> */}
                    
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
                    <button className='btn btn-light border-2 button1'>Login To My Account</button>
                  </div>
                </div>
            </div>
        </div>
        
    </div>
            <footer>
              <p>Any personal information you give us will be handled according to our <a href=''>Privacy Policy</a></p>
                
            </footer>
            </>
  )
}
