import {Box,Typography,Button,Divider} from "@mui/material"

import mapImage from "../assets/contactImage/mapImg.png"
import nameImage from "../assets/contactImage/nameImg.png"
import messageImage from "../assets/contactImage/messageimg.png"

import "./Contactpage.css"

const Contactpage = () => {
  return (
    <>
    <Box className="small-devices">
        <Typography variant="h4" sx={{fontWeight:"700",fontSize:{xs:"18px"},fontFamily:"Crimson Text",color:"#000",margin:"20px 0px"}}>Contact Us</Typography>
        <Typography sx={{fontWeight:"normal",fontSize:{xs:"16px"},fontFamily:"Crimson Text",color:"#000",margin:"20px 0px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Typography>
        <Box className="text-fields-cont">
            <img src={mapImage} alt="mapImage" className="map-image"/>
            <Typography>Name</Typography>
            <img src={nameImage} alt="nameImage" className="each-width-input"/>
            <Typography>Email</Typography>
            <img src={nameImage} alt="nameImage" className="each-width-input"/>
            <Typography>Message</Typography>
            <img src={messageImage} alt="messageImage" className="each-width-input" />
        </Box>
        <Button variant="contained">Submit</Button>
    </Box>
    <Box className="med-large-devices">
    <Typography variant="h4" sx={{fontWeight:"700",fontSize:{md:"20px",lg:"35px",xl:"40px"},fontFamily:"Crimson Text",color:"#000",margin:"20px 0px"}}>Contact Us</Typography>
    <Typography sx={{fontWeight:"normal",fontSize:{md:"16px",lg:"30px",xl:"35px"},fontFamily:"Crimson Text",color:"#000",margin:"20px 0px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Typography>
    <Box className="text-fields-cont">
        <img src={mapImage} alt="mapImage" className="map-image"/>
        <Box className="input-fields">
        <Typography sx={{fontWeight:"normal",fontSize:{md:"16px",lg:"25px",xl:"30px"},fontFamily:"Crimson Text",color:"#000",margin:"20px 0px"}}>Name</Typography>
        <img src={nameImage} alt="nameImage" className="each-width-input"/>
        <Typography sx={{fontWeight:"normal",fontSize:{md:"16px",lg:"25px",xl:"30px"},fontFamily:"Crimson Text",color:"#000",margin:"20px 0px"}}>Email</Typography>
        <img src={nameImage} alt="nameImage" className="each-width-input"/>
        <Typography sx={{fontWeight:"normal",fontSize:{md:"16px",lg:"25px",xl:"30px"},fontFamily:"Crimson Text",color:"#000",margin:"20px 0px"}}>Message</Typography>
        <img src={messageImage} alt="messageImage" className="each-width-input" />
        <Divider/>
        <Button variant="contained" sx={{bgcolor:"#000",fontSize:"30px",margin:"20px 0px",width:"85%"}}>Submit</Button>
        </Box>
    </Box>
</Box>
</>
  )
}

export default Contactpage