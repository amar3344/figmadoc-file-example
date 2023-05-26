import { Box,Typography ,Button} from '@mui/material'
import image1 from "../assets/img-1.png"

import "./Home.css"

const Home = () => {
  return (
    <Box id="home">
      <Box className = "x-small-devices">
        <img src={image1} alt="image1" className="image1"/>
        <Box className="welcome-container">
            <Typography variant="h5" style={{fontFamily:"Work Sans",color:"#fff",fontWeight:"700",fontSize:"16px"}}>Welcome</Typography>
            <Typography sx={{fontFamily:"Crimson Text",color:"#fff",fontWeight:"700",fontSize:"28px",height:"70px"}}>Lorem ipsum dolor sit ament consectore</Typography>
            <Typography sx={{fontFamily:"Work Sans",color:"#fff",fontWeight:"400",fontSize:"16px",height:"95px",mt:"15px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error
                ipsum, voluptate culpa nesciunt delectus iste?</Typography>
            <Button variant="contained" sx={{bgcolor:"#fff",color:"#000",border:"none",borderRadius:"5px",margin:"25px 0px 40px 0px",}}>Explore</Button>
        </Box>
      </Box>
      <Box className = "largr-devices">
    <Box className="welcome-container">
        <Typography variant="h5" style={{fontFamily:"Work Sans",color:"#fff",fontWeight:"700",fontSize:"16px"}}>Welcome</Typography>
        <Typography sx={{fontFamily:"Crimson Text",color:"#fff",fontWeight:"700",fontSize:"28px",height:"70px"}}>Lorem ipsum dolor sit ament consectore</Typography>
        <Typography sx={{fontFamily:"Work Sans",color:"#fff",fontWeight:"400",fontSize:"16px",height:"95px",mt:"15px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error
            ipsum, voluptate culpa nesciunt delectus iste?</Typography>
        <Button variant="contained" sx={{bgcolor:"#fff",color:"#000",border:"none",borderRadius:"5px",margin:"25px 0px 40px 0px",}}>Explore</Button>
    </Box>
    <img src={image1} alt="image1" className="image1"/>
  </Box>
  </Box>
  )
}

export default Home