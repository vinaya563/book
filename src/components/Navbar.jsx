import React from 'react'
import '../App';
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
              <h1>𝔒𝔫𝔢 𝔪𝔬𝔯𝔢 𝔭𝔞𝔤𝔢</h1>
      </div>
      <div>
          <Link to="/favorites"><h3>
            Your Favorites
          </h3>
          </Link>  
      </div>
    </div>
  )
}

export default Navbar
