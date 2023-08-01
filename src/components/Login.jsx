import React from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {

    const navigate=useNavigate();
  return (


    <div className='forms'>
          <form>
              <div className="input-container">
                  <label>Username </label>
                  <input type="text" name="uname" required />
                  
              </div>
              <div className="input-container">
                  <label>Password </label>
                  <input type="password" name="pass" required />
                 
              </div>
              <div className="button-container">
                  <input type="submit" onClick={()=>navigate(`/home`)} />
              </div>
          </form>
    </div>
  )
}

export default Login

