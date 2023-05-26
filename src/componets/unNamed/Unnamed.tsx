import {Box,Typography,Button} from "@mui/material"

import image2 from "../assets/img-2.png"
import image3 from "../assets/img-3.png"

import "./Unnamed.css"

const Unnamed = () => {
  return (
    <Box id="services">
    <Box className="unnamed-xs-container">
        <img src={image2} alt="image2" width="100%" />
        <Box className="text-unnamed-xs">
            <Typography variant="h6" sx={{fontFamily:"Crimson Text",fontWeight:"700",fontSize:"24px",color:"#212529"}}>Lorem ipsum dolor sit amet consectetur </Typography>
            <Typography sx={{fontFamily:"Work Sans",fontWeight:"400",fontSize:"15px",color:"rgba(33, 37, 41, 0.5)",margin:"20px 0px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Suscipit nemo hic quos, ab, dolor aperiam nobis cum
                est eos error ipsum, voluptate culpa nesciunt delectus iste?</Typography>
                <Button variant="contained" sx={{bgcolor:"#212529",color:"#fff",border:"none",borderRadius:"5px",margin:"25px 0px 40px 0px",}}>Learn More</Button>
        </Box>
        <img src={image3} alt="image3" width="100%"/>
        <Box className="text-unnamed-xs">
            <Typography variant="h6" sx={{fontFamily:"Crimson Text",fontWeight:"700",fontSize:"24px",color:"#212529"}}>Lorem ipsum dolor sit amet consectetur </Typography>
            <Typography sx={{fontFamily:"Work Sans",fontWeight:"400",fontSize:"15px",color:"rgba(33, 37, 41, 0.5)",margin:"20px 0px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Suscipit nemo hic quos, ab, dolor aperiam nobis cum
                est eos error ipsum, voluptate culpa nesciunt delectus iste?</Typography>
                <Button variant="contained" sx={{bgcolor:"#212529",color:"#fff",border:"none",borderRadius:"5px",margin:"25px 0px 40px 0px",}}>Learn More</Button>
        </Box>
    </Box>
    <Box className="unnamed-large-container">
      <Box className="each-box">
        <img src={image2} alt="image2" />
          <Box className="text-unnamed-xs">
              <Typography variant="h6" sx={{fontFamily:"Crimson Text",fontWeight:"700",fontSize:"24px",color:"#212529"}}>Lorem ipsum dolor sit amet consectetur </Typography>
              <Typography sx={{fontFamily:"Work Sans",fontWeight:"400",fontSize:"15px",color:"rgba(33, 37, 41, 0.5)",margin:"20px 0px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                  Suscipit nemo hic quos, ab, dolor aperiam nobis cum
                  est eos error ipsum, voluptate culpa nesciunt delectus iste?</Typography>
                  <Button variant="contained" sx={{bgcolor:"#212529",color:"#fff",border:"none",borderRadius:"5px",margin:"25px 0px 40px 0px",}}>Learn More</Button>
          </Box>
      </Box>
      <Box className="each-box">
        <Box className="text-unnamed-xs">
            <Typography variant="h6" sx={{fontFamily:"Crimson Text",fontWeight:"700",fontSize:"24px",color:"#212529"}}>Lorem ipsum dolor sit amet consectetur </Typography>
            <Typography sx={{fontFamily:"Work Sans",fontWeight:"400",fontSize:"15px",color:"rgba(33, 37, 41, 0.5)",margin:"20px 0px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Suscipit nemo hic quos, ab, dolor aperiam nobis cum
                est eos error ipsum, voluptate culpa nesciunt delectus iste?</Typography>
                <Button variant="contained" sx={{bgcolor:"#212529",color:"#fff",border:"none",borderRadius:"5px",margin:"25px 0px 40px 0px",}}>Learn More</Button>
        </Box>
        <img src={image3} alt="image3"/>
      </Box>
    </Box>
    </Box>
  )
}

export default Unnamed