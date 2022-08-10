import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import InternalHeader from '../InternalHeader/InternalHeader'
import './Register.css'
import { useParams,useHistory } from 'react-router-dom'
import { auth, db } from '../config/Config'


export default function Register(props) {

  const history=useHistory();
  const params=useParams();
  const handleChangeLogin =()=>{
    history.push("/login")
  }

  const [name,setName]=useState('');
  const [email,setEmail] = useState('')
  const [phone,setPhone] =useState('')
  const [password,setPassword] =useState('');
  const [error,setError]=useState('')

  const Signup=(e)=>{
    e.preventDefault();
    // console.log("submitted")
    // console.log(name,email,phone,password)
    auth.createUserWithEmailAndPassword(email, password).then((cred) => {
      db.collection('SignedUpUsersData').doc(cred.user.uid).set({
          name: name,
          email:email,
          phone:phone,
          password: password
      }).then(() => {
          setName('');
          setEmail('');
          setPhone('');
          setPassword('');
          setError('');
          props.history.push('/login');
      }).catch(err => setError(err.message));
  }).catch(err => setError(err.message));

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
                  <form onSubmit={Signup}>
                    <input type="text" className='form-control' required placeholder='Enter Name'
                    onChange={(e)=>setName(e.target.value)} value={name}/>
                    {error && <span className='validation'>This field is required</span>}
                    <input type="text" required className='form-control' placeholder='Enter Email'
                    onChange={(e)=>setEmail(e.target.value)} value={email}/>
                    {error && <span className='validation'>This field is required</span>}
                    <input type="number" required className='form-control' placeholder='Phone'
                    onChange={(e)=>setPhone(e.target.value)} value={phone}/>
                    {error && <span className='validation'>This field is required</span>}
                    <input type="password" required className='form-control' placeholder='Enter Password'
                    onChange={(e)=>setPassword(e.target.value)} value={password}/>
                   {error && <span className='validation'>This field is required</span>}
                    
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
