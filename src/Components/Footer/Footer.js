import React from 'react';
import '../Footer/Footer.css';
import '../NavBar/NavBar.css';
import { Link } from 'react-router-dom';
import { BsYoutube, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn, FaFacebookF} from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <>    
      <footer class="footer-distributed">

        <div class="footer-left">
            <div className="NavBar-logo-it">
              <Link className='NavBar-logo-it NavBar-Links-it' to={'/'}>it</Link> 
            </div>
            <p className="footer-links">
                  <a href="#">Home</a>
                  <a href="#">About</a>
                  <a href="#">Contact</a>
                  <a href="#">Blog</a>
              </p>
           
            {/* <p class="footer-company-name">Copyright © <strong>SagarDeveloper</strong> All rights reserved</p> */}
        </div>

        {/* ------------------------------------------------------------------------------------------------------- */}
          <div className="footer-right">

              <p className="footer-company-about">
                  <span>About the company</span>
                  <strong>Sagar Developer</strong> is a Youtube channel where you can find more creative CSS Animations
                  and
                  Effects along with
                  HTML, JavaScript and Projects using C/C++.
              </p>
              <div className="footer-icons">
                <a href="#"><FaFacebookF/></a>
                <a href="#"><GrInstagram/></a>
                <a href="#"><BsYoutube/></a>
                <a href="#"><BsTwitter/></a>
                <a href="#"><FaLinkedinIn/></a>
            </div>
              
          </div>

        {/* ----------------------------------------------------------------------------------------------------------------------- */}
          <div className="footer-center">

          


           

            <div>
                <i className="fa fa-map-marker"></i>
                <p><span>Jordan</span>
                    Amman</p>
            </div>

            <div>
                <i className="fa fa-phone"></i>
                <p>+962 797229875</p>
            </div>
            <div>
                <i className="fa fa-envelope"></i>
                <p><a href="mohammed.masla@gmail.com">mohammed.masla@gmail.com</a></p>
            </div>
            
          </div>  

      </footer>

    </>

    
  )
}

export default Footer