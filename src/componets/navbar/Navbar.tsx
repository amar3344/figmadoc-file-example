import { Component } from 'react'


import { Box,Typography,Link } from '@mui/material'
import navImage from "../assets/navlogo-2.png"
import menuBars from "../assets/menubars.png"

import "./Navbar.css"

interface IProps{

}

interface IState{
  isActive : boolean
}

class Navbar extends Component<IProps,IState>{
  state : IState = {
    isActive:false
  }

  handleMenuBars=()=>{
    this.setState(p=> ({isActive  : !p.isActive}))
  }

  render(){
    const {isActive} = this.state
    return (
      <>
      <Box className="navbar-xs-container">
        <Box className="navbar-con">
          <Box className="navlogo-container">
                <img src={navImage} alt="navLogo" className='nav-logo'/>
                <Typography variant="h5" sx={{fontWeight:"600"}} className="start-text">Start</Typography>
          </Box>
          <img src={menuBars} alt="menubars" className='menu-bars' onClick={this.handleMenuBars}/>
        </Box>
        {isActive && (
            <Box className="xs-nav-links">
              <Link href="#home" underline="none" sx={{fontFamily:"Work Sans",fontWeight:"400",color:"#fff",fontSize:"20px",margin:"0px 20px 0px 0px"}}>Home</Link>
              <Link href="#portfolio" underline="none" sx={{fontFamily:"Work Sans",fontWeight:"400",color:"#fff",fontSize:"20px",margin:"0px 20px 0px 0px"}}>Portfolio</Link>
              <Link href="#services" underline="none" sx={{fontFamily:"Work Sans",fontWeight:"400",color:"#fff",fontSize:"20px",margin:"0px 20px 0px 0px"}}>Services</Link>
              <Link href="#contact" underline="none" sx={{fontFamily:"Work Sans",fontWeight:"400",color:"#fff",fontSize:"20px",margin:"0px 20px 0px 0px"}}>Contact</Link >
              </Box>
              )}
      </Box>
      <Box className="navbar-large-container">
        <Box className="navbar-con">
          <Box className="navlogo-container">
                <img src={navImage} alt="navLogo" className='nav-logo'/>
                <Typography variant="h5" sx={{fontWeight:"600"}} className="start-text">Start</Typography>
          </Box>
          <Box className="nav-elements-large">
            <Link href="#home" underline="none" sx={{fontFamily:"Work Sans",fontWeight:"400",color:"#fff",fontSize:"20px",margin:"0px 20px 0px 0px"}}>Home</Link>
            <Link href="#portfolio" underline="none" sx={{fontFamily:"Work Sans",fontWeight:"400",color:"#fff",fontSize:"20px",margin:"0px 20px 0px 0px"}}>Portfolio</Link>
            <Link href="#services" underline="none" sx={{fontFamily:"Work Sans",fontWeight:"400",color:"#fff",fontSize:"20px",margin:"0px 20px 0px 0px"}}>Services</Link>
            <Link href="#contact" underline="none" sx={{fontFamily:"Work Sans",fontWeight:"400",color:"#fff",fontSize:"20px",margin:"0px 20px 0px 0px"}}>Contact</Link >
          </Box>
        </Box>
      </Box>
      </>
    )

    
  }
}


export default Navbar