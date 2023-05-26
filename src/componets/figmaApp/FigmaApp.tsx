import { Component} from 'react'
import { Box } from '@mui/material'

import Navbar from "../navbar/Navbar"
import Home from "../home/Home"

import "./FigmaApp.css"
import Partner from '../partners/Partner'
import Unnamed from '../unNamed/Unnamed'
import Team from '../team/Team'
import Footer from '../footer/Footer'
import Portfolio from '../portfolioPage/Portfolio'
import Service from '../servicesPage/ServicePage'

interface IProps{

}

interface IState{

}

class FigmaApp extends Component{

  render(){
    return (
      <Box className="react-app">
          <Navbar/>
          <Home/>
          <Partner/>
          <Unnamed/>
          <Team/>
          <Footer/>
          <Portfolio/>
          {/* <Service/> */}
      </Box>
    )
    

  }
  
}

export default FigmaApp