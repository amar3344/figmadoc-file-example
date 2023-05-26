import React from 'react'
import {Box} from "@mui/material"
import Navbar from '../navbar/Navbar'
import Phome from '../protfolioHome/Phome'
import Footer from '../footer/Footer'

const Portfolio = () => {
  return (
    <Box>
        {/* <Navbar/> */}
        <Phome/>
        <Footer/>
    </Box>
  )
}

export default Portfolio