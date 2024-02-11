import React from 'react'
import './LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>Sign Up</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        <div className='input'>
          <input type="text" />
        </div>

        <div className='input'>
          <input type="email" />
        </div>

        <div className='input'>
          <input type="password" />
        </div>
      </div>
      <div className="forgot-password">Lost Password? <span> Click Here</span></div>
      <div className="submit-conainer">
        <div className="submit"> Sign Up</div>
        <div className="submit"> Login</div>
      </div>
    </div>
  )
}

export default LoginSignup
