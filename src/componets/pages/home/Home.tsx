import {Box} from "@mui/material"

import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'
import Partner from '../../partners/Partner'
import Unnamed from "../../unNamed/Unnamed"
import Team from '../../team/Team'
import HomePage from "../../homePage/Home"
import ScrollButton from "../../scrollButton/ScrollButton"


import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <Box>
            <Navbar/>
            <HomePage/>
            <Partner/>
            <Unnamed/> 
            <Team/>
            <ScrollButton/>
            <Footer/>
      </Box>
    )
  }
}
