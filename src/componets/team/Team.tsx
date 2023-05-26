import {Box,Typography,Button} from "@mui/material"

import pegLegg from "../assets/peglegg.png"
import richard from "../assets/Teams/richardguerra.png"
import alex from "../assets/Teams/alexandra.png"
import jan from "../assets/Teams/janetbray.png"

import "./Team.css"

const Team = () => {
  return (
    <Box id="services">
    <Box className="xs-team-container">
        <Typography variant="h5" sx={{color:"#74C69D",letterSpacing:"5px",fontFamily:"Work Sans",fontWeight:"700",fontSize:"16px"}} className="partner-text">TEAM</Typography>
        <Typography variant="h5" sx={{color:"#000",fontFamily:"Crimson Text",fontWeight:"700",fontSize:"24px"}}>Our Talents</Typography>
        <Typography sx={{color:"#000",fontFamily:"Work Sans",fontWeight:"400",fontSize:"20px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Typography>
        <img src={pegLegg} alt="peglegg" width="100%" />
        <img src={richard} alt="richard" width="100%"/>
        <img src={alex} alt="alex" width="100%"/>
        <img src={jan} alt="jan" width="100%"/>
        <Button variant="contained" sx={{bgcolor:"#212529",color:"#fff",border:"none",borderRadius:"5px",margin:"25px 0px 40px 0px",}}>Learn More</Button>
    </Box>
    <Box className="large-team-container">
      <Typography variant="h5" sx={{color:"#74C69D",letterSpacing:"5px",fontFamily:"Work Sans",fontWeight:"700",fontSize:"16px"}} className="partner-text">TEAM</Typography>
      <Typography variant="h5" sx={{color:"#000",fontFamily:"Crimson Text",fontWeight:"700",fontSize:"24px"}}>Our Talents</Typography>
      <Typography sx={{color:"#000",fontFamily:"Work Sans",fontWeight:"400",fontSize:"20px",mb:"20px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Typography>
      <Box>
        <img src={pegLegg} alt="peglegg" className="each-image-team" width="100%"/>
        <img src={richard} alt="richard" className="each-image-team" width="100%"/>
        <img src={alex} alt="alex" className="each-image-team" width="100%"/>
        <img src={jan} alt="jan" className="each-image-team" width="100%"/>
      </Box>
      <Button variant="contained" sx={{bgcolor:"#212529",color:"#fff",border:"none",borderRadius:"5px",margin:"25px 0px 40px 0px",}}>Learn More</Button>
    </Box>
</Box>  
  )
}

export default Team