import {Box,Typography,Button} from "@mui/material"

import microsoft from "../assets/microsoft.png"
import airbnb from "../assets/airbnb.png"
import spotify from "../assets/spotify.png"
import google from "../assets/google-2.png"
import facebook from '../assets/facebook.png'

import "./Partner.css"

const Partner = () => {
  return (
    <Box sx={{margin:"20px 0px 0px 0px"}}>
    <Box className="partner-x-small">
        <Typography variant="h5" sx={{color:"#74C69D",letterSpacing:"5px",fontFamily:"Work Sans",fontWeight:"700",fontSize:"16px"}} className="partner-text">PARTNERS</Typography>
        <Typography variant="h5" sx={{color:"#000",fontFamily:"Crimson Text",fontWeight:"700",fontSize:"24px"}}>Lorem Ipsum Dolor</Typography>
        <Typography sx={{color:"#000",fontFamily:"Work Sans",fontWeight:"400",fontSize:"20px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Typography>
        <Box className="partners-container-xs">
            <img src={google} alt="google" className="each-partner"/>
            <img src={microsoft} alt="microsoft" className="each-partner"/>
            <img src={airbnb} alt="airbnb" className="each-partner"/>
            <img src={facebook} alt="facebook" className="each-partner"/>
            <img src={spotify} alt="spotify" className="each-partner"/>
            <Button variant="contained" sx={{bgcolor:"#212529",color:"#fff",margin:"25px 0px 40px 0px",}}>Learn More</Button>
        </Box>
    </Box>
    <Box className="partner-large-devices">
    <Typography variant="h5" sx={{color:"#74C69D",letterSpacing:"5px",fontFamily:"Work Sans",fontWeight:"700",fontSize:{md:"30px",lg:"40px"}}} className="partner-text">PARTNERS</Typography>
    <Typography variant="h5" sx={{color:"#000",fontFamily:"Crimson Text",fontWeight:"700",fontSize:{xs:"12px",sm:"16px",md:"25px",lg:"35px",margin:"5px 0px"}}}>Lorem Ipsum Dolor</Typography>
    <Typography sx={{color:"#000",fontFamily:"Work Sans",fontWeight:"400",fontSize:{xs:"12px",sm:"16px",md:"20px",lg:"32px"}}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Typography>
    <Box className="partners-container-xs">
        <img src={google} alt="google" className="each-partner"/>
        <img src={microsoft} alt="microsoft" className="each-partner"/>
        <img src={airbnb} alt="airbnb" className="each-partner"/>
        <img src={facebook} alt="facebook" className="each-partner"/>
        <img src={spotify} alt="spotify" className="each-partner"/>
    </Box>
    <Button variant="contained" sx={{bgcolor:"#212529",color:"#fff",margin:"25px 0px 40px 0px",fontSize:{xs:"12px",sm:"16px",md:"20px",lg:"26px"}}}>Learn More</Button>
</Box>
</Box>
  )
}

export default Partner