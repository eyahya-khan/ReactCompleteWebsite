import React,{useState} from 'react'
import {Link} from 'react-router-dom'
//here FaBars,IoIosLocate is comes from react-icon
import {FaBars,FaTimes} from 'react-icons/fa'
import {IoIosLocate} from 'react-icons/io'

function Navbar() {
    //useState hook for click on hamburger menu
    const [click,setClick]=useState(false)
    const handleClick=()=>setClick(!click)

    return ( 
        <>
        <div className="navbar">
        <div className="navbar-container container">
            <Link to='/' className="navbar logo">
            <IoIosLocate/> Novice
            </Link>
                <div className="menu-icon" onClick={handleClick}>
                {click? <FaTimes/>: <FaBars/>}
                </div>
        </div>
        </div>

        </>
    )
}

export default Navbar
