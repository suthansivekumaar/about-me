import React  from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <div class="navbar-name">Suthan Sivekumaar</div>
                <ul className='nav-menu'>
                  <li className='nav-item'>
                    <Link to="/" className="nav-links">About Me</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to="/experience" className="nav-links">Experience</Link>
                  </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar