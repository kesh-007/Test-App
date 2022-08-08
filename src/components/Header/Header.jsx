import React from 'react'
import {ReactNavbar} from 'overlay-navbar'
import logo from "../../Images/logo.png" 

function Header() {
  return <ReactNavbar 
  navColor1="black"
  navColor2="white"
  burgerColor="gold"
  burgerColorHover="white"
  nav2justifyContent="space-around"
  nav3justifyContent="space-around"
  logo={logo}
  logoWidth="250px"
  link1Text="Home"
  link2Text="About "
  link3Text="Contact "
  link4Text="Subscribe"
  link1Url="/"
  link2Url="/about"
  link3Url="/contact"
  link4Url="/subscribe"
  link1ColorHover="gold"
  link1Color='black'
  link1Size="1.5rem"
  link1Padding="3vmax"
  

   />
}

export default Header