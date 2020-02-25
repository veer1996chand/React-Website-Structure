import React from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/images/logo.png"
import Image from "../atoms/Image"

// Import style
import "./navbar.css"

import { Navbar, Nav, NavDropdown } from "react-bootstrap"


const NavigationBar = (props) => {
  // window.onscroll = function () { scrollFunction() }; 
  // function scrollFunction() {
  //   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      
  //     document.getElementById("logo").style.width= "100px"
  //   } else { 
  //     document.getElementById("logo").style.width= "100%"
  //   }
  // }
  return (
    <Navbar expand="lg" className="text-white" style={{ fontSize: '20px' }}>
      <Link to="/" className="brand-logo">
        <Image id="logo" src={logo} title="Dror" />
      </Link>  
        <i className="fas fa-bars navbar-toggler border-0 text-light align-right themeBgA" style={{fontSize:"25px"}} data-toggle="collapse" data-target="#basic-navbar-nav" aria-controls="basic-navbar-nav"  aria-expanded="false" aria-label="Toggle navigation"></i> 
   
      
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="/about-us" className="nav-link text-white pr-4" >About Us</Nav.Link>
          <Nav.Link href="/our-products" className="nav-link text-white pr-4" >Product</Nav.Link>
          <Nav.Link href="/for-business" className="nav-link text-white pr-4" >For Business</Nav.Link>
          <Nav.Link href="/media" className="nav-link text-white pr-4 d-none" >Media</Nav.Link>
          <Nav.Link href="http://blogs.drorapp.com/" className="nav-link text-white pr-4" >Blog</Nav.Link>
          <Nav.Link href="/contact-us" className="nav-link text-white pr-4" >Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar
