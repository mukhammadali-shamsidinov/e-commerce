import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false)
    const [users] = useState(JSON.parse(localStorage.getItem('user')))

 
  return (
    <nav className={`nav-container bg-dark ${isOpen ? 'nav-show':null}`}>
    
            <div className="navbar_logo">
                <Link to={'/home'}>
                <img src="/images/logo.png" alt="logo" />
                </Link>
                <p onClick={()=>setIsOpen((prev)=>!prev)}>{isOpen ? <i className="fa fa-solid fa-xmark"></i>:<i className=" fa fa-solid fa-bars"></i>}</p>
            </div>
       
        <ul className={`list-items ${isOpen ? 'list-items-show' :null  }`}>
            <li className={`list-item ${isOpen ? 'list-item-show':null}`}>
                Home
            </li>
            <li className={`list-item ${isOpen ? 'list-item-show':null}`}>
                About
            </li>
            <li className={`list-item ${isOpen ? 'list-item-show':null}`}>
                Contact
            </li>
        </ul>
        <div className={`nav-icons ${isOpen ? 'nav-icons-show':null}`}>
            <Link to={'/basket'} className='btn btn-danger'>
                Basket
            </Link>
            &nbsp;
            {users.displayName.length > 0 ? 
            <Link to={'/profile'} className='btn btn-success'>Profile</Link>
            : <Link to={'/'} className='btn btn-warning text-light'>
                Register
            </Link>}
           
        </div>
    </nav>
  )
}

export default Navbar