import React from 'react'
import '../NavBar/NavBar.css';
import { Link } from 'react-router-dom';


const NavBar = () => {
  
  return (
      <div className='NavBar-Holder-it'>

          <div className='NavBar-ul-it'>
            <ul className='NavBar-ul-it'>
              <li className='NavBar-li-it'><Link className='NavBar-Links-it' to={'/'}>Home</Link></li>
              <li className='NavBar-li-it'><Link className='NavBar-Links-it' to={'/about'}>About Us</Link></li>
              <li className='NavBar-li-it'><Link className='NavBar-Links-it' to={'/contactUs'}>Contact Us</Link></li>
              <li className='NavBar-li-it'><Link className="NavBar-Links-it" to={'/profile'}>Profile</Link></li>
              <li className='NavBar-li-it'><Link className='NavBar-Links-it' to={'/cart'}>Cart</Link></li>
              <li className='NavBar-li-it'><Link className='NavBar-Links-it' to={'/login'}>Login</Link></li>
              {/* <li className='NavBar-li-it first'><Link className='NavBar-Links-it' to={'/logout'}>logout</Link></li> */}
            </ul>
          </div>

          <div className="NavBar-logo-it">
            <Link className='NavBar-logo-it NavBar-Links-it' to={'/'}>it</Link> 
          </div>

      </div>  
    )
}




const NavBarlogout = () => {
  return (
    <div className='NavBar-Holder-it'>

        <div className='NavBar-ul-it'>
          <ul className='NavBar-ul-it'>
            {/* <li className='NavBar-li-it'><Link className='NavBar-Links-it' to={'/'}>Home<BsHouse/></Link></li>
            <li className='NavBar-li-it'><Link className='NavBar-Links-it' to={'/about'}>About Us<BsQuestionDiamond/></Link></li>
            <li className='NavBar-li-it'><Link className='NavBar-Links-it' to={'/contactUs'}>Contact Us<BsTelephoneInbound/></Link></li>
            <li className='NavBar-li-it first'><Link className="NavBar-Links-it" to={'/profile'}>Profile<BsPerson/></Link></li>
            <li className='NavBar-li-it first'><Link className='NavBar-Links-it' to={'/cart'}>Cart<BsBagDash/></Link></li>
            <li className='NavBar-li-it first'><Link className='NavBar-Links-it' to={'/login'}>Login<BsDoorClosed/></Link></li> */}
            <li className='NavBar-li-it'><Link className='NavBar-Links-it' to={'/logout'}>logout</Link></li>
          </ul>
        </div>

        <div className="NavBar-logo-it">
          <Link className='NavBar-logo-it NavBar-Links-it' to={'/'}>it</Link> 
        </div>

    </div>  
  )
}
  
  
  export {NavBar , NavBarlogout}