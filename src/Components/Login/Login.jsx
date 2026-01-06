 import React from 'react'
import './Login.css'
import hero from '../../assets/hero.png'
import { NavLink } from 'react-router-dom'
const Login = () => {
    return (
        <div className='login'>
            <div className='login-left'>
                 <div  className='img-login'>
                    <img src={hero} alt="" />
                 </div>
            </div>

            <div className='login-right'>
                <div className='login-card'>
                    <h2>Welcome to <span>Pospro</span></h2>
                    <h5>Welcone back,Please login in to your account</h5>
                    <div className='imput-email'>
                        <img src="" alt="" />
                        <input type="email" placeholder='Enter Your Email' />
                    </div>
                    <div className='imput-password'>
                        <img src="" alt="" />
                        <input type="password" placeholder='Password' />
                    </div>
                    <div className='option'>
                        <label>
                            <input type="checkbox" /> Remember Me </label>
                        <span className='forget'>Forget Password</span>
                    </div>

                    <button className='Login-btn'>LogIn</button>
                    <div className='create'>
                        <NavLink to="/">
                          <p className='back'>Back to Home</p>
                        </NavLink>
                        <p className='account-create'>Create an account.</p>
                    </div>

                    <div className='login-option'>
                        <button className='super-admin'>Super Admin</button>
                        <button className='admin'>Admin</button>
                        <button className='business'>Bussiness</button>
                        <button className='branch'>Multi Branch</button>
                    </div>
                    <div className='divide'>Or Continue with</div>

                    <div className='social-login'>
                        <div className='x'>
                            <img src="" alt="" />
                            <button>Log in with X</button>
                        </div>

                        <div className='google'>
                            <img src="" alt="" />
                            <button>Log in with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
