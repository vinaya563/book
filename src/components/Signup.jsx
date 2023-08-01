import React from 'react'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
    

    const navigate = useNavigate();

  return (
      <div className='forms'>
          <form>

              <div className="input-container">
                  <label>Name of the user </label>
                  <input type="text" name="uname" required />

              </div>
              <div className="input-container">
                  <label>Username </label>
                  <input type="text" name="uname" required />

              </div>
              <div className="input-container">
                  <label>Password </label>
                  <input type="password" name="pass" required />

              </div>
              <p className='para'>By creating an account you agree to our Terms & Privacy</p>
              <div className="button-container">
                  <input type="submit" onClick={() => navigate(`/`)} />
              </div>
          </form>
      </div>
  )
}

export default Signup
