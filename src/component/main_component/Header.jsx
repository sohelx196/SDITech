import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
     
     <header>
        <nav className='flex'>
             <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/lost&found">Lost&Found</Link>
                </li>
             </ul>
        </nav>
     </header>
    
    </>
  )
}

export default Header