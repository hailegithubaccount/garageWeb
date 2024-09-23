import React from 'react'
import logo from "../../../assets/images/kk.png";
import icon from "../../../assets/images/icons/icon-bar.png"


const Header = () => {
  return (
    <div>
  
        <header class="main-header header-style-one">

           
            <div class="header-top">
                <div class="auto-container">
                    <div class="inner-container">
                        <div class="left-column">
                            <div class="text">Enjoy the Beso while we fix your car</div>
                            <div class="office-hour">Monday - Saturday 7:00AM - 6:00PM</div>
                        </div>
                        <div class="right-column">
                            <div class="phone-number">Schedule Your Appontment Today : <strong>1800 456 7890</strong>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            
            <div class="header-upper">
                <div class="auto-container">
                    <div class="inner-container">
                       
                        <div class="logo-box">
                            <div class="logo"><a href="/"><img src={logo} alt=""/></a>
                            </div>
                        </div>
                        <div class="right-column">
                           
                            <div class="nav-outer">
                               
                                <div class="mobile-nav-toggler"><img src={icon} alt=""/>
                                </div>

                               
                                <nav class="main-menu navbar-expand-md navbar-light">
                                    <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <ul class="navigation">
                                            <li class="dropdown"><a href="/">Home</a>
                                            </li>
                                            <li class="dropdown"><a href="/about">About Us</a>
                                            </li>
                                            <li class="dropdown"><a href="/services">Services</a>
                                            </li>
                                            <li><a href="/contact">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div class="search-btn"></div>
                            <div class="link-btn"><a href="/login" class="theme-btn btn-style-one">Login</a></div>
                        </div>
                    </div>
                </div>
            </div>
          </header> 
    </div>
  )
}

export default Header
