import {Box,Typography,Button} from "@mui/material"

import card1 from "../assets/servicesImages/card1.svg"
import card2 from "../assets/servicesImages/card2.svg"
import card3 from "../assets/servicesImages/card3.svg"

import "./Services.css"

const Services = () => {
  return (
    <>
    <Box className="small-devices-services-css">
        <Typography variant="h5" sx={{color:"#74C69D",letterSpacing:"5px",fontFamily:"Work Sans",fontWeight:"700",fontSize:"16px",margin:"20px 0px"}} className="partner-text">SERVICES</Typography>
        <Typography variant="h4" sx={{fontWeight:"700",fontSize:{xs:"18px"},fontFamily:"Crimson Text",color:"#000",margin:"0px 0px"}}>Our Services</Typography>
        <Typography sx={{fontWeight:"normal",fontSize:{xs:"16px"},fontFamily:"Crimson Text",color:"#000",margin:"20px 0px",textAlign:"center"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Typography>
        <Box className="each-card-container">
            <img src={card1} alt="card1" className="each-card"/>
            <img src={card2} alt="card2" className="each-card"/>
            <img src={card3} alt="card13" className="each-card"/>
        </Box>
    </Box>
    <Box className="med-large-devices-services">
    <Typography variant="h5" sx={{color:"#74C69D",letterSpacing:"5px",fontFamily:"Work Sans",fontWeight:"700",fontSize:{md:"25px",lg:"30px",xl:"35px"},margin:"20px 0px"}} className="partner-text">SERVICES</Typography>
    <Typography variant="h4" sx={{fontWeight:"700",fontSize:{md:"20px",lg:"25px",xl:"30px"},fontFamily:"Crimson Text",color:"#000",margin:"0px 0px"}}>Our Services</Typography>
    <Typography sx={{fontWeight:"normal",fontSize:{md:"15px",lg:"20px",xl:"25px"},fontFamily:"Crimson Text",color:"#000",margin:"20px 0px",textAlign:"center"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Typography>
    <Box className="each-card-container">
        <img src={card1} alt="card1" className="each-card"/>
        <img src={card2} alt="card2" className="each-card"/>
        <img src={card3} alt="card13" className="each-card"/>
    </Box>
</Box>
</>
  )
}

export default Services