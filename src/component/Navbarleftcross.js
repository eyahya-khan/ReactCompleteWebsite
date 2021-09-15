import React from 'react';
import { Link } from 'react-router-dom';
import './Navbarleftcross.css';

function Navbarleftcross() {

  return (
    <>
            <div className="wrapper">
            <input type="checkbox" id="nav-toggle"/>
            <label className="nav-toggle" for ="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
            </label>
            <nav className="menu">
            <ul className="nav-list">
                <li className="nav-list-item"><Link to='/homes'>Home</Link></li>
                <li className="nav-list-item"><Link to='/products'>Projects</Link></li>
                <li className="nav-list-item"><Link to='/contact'>Contact</Link></li>
                <li className="nav-list-item"><Link to='/signup'>Signup</Link></li>
            </ul>
            </nav>
            <section>
               
            </section>
            </div>
    </>
  );
}

export default Navbarleftcross;