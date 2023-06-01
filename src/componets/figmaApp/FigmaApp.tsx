import {BrowserRouter,Route,Routes} from "react-router-dom"
import { Component} from 'react'
import { Box } from '@mui/material'

import "./FigmaApp.css"

import Home from "../pages/home/Home"
import Portfolio from '../pages/portfolio/Portfolio'
import Contacts from '../pages/contacts/Contacts'
import ServicePage from '../pages/services/Services'
import SignUp from "../pages/signupPage/SignUp"
import Signin from "../pages/signinpage/Signin"

import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"

interface IProps{

}

interface IState{

}

class FigmaApp extends Component{

  render(){
    return (
      <Box className="react-app">
        <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<SignUp/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/services" element={<ServicePage/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
        {/* <Footer/> */}
        </BrowserRouter>
      </Box>
    )
    

  }
  
}

export default FigmaApp