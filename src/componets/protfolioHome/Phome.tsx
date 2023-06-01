import {Box,Typography,Button} from "@mui/material"

import img1 from "../assets/potfolioImages/img1.svg"
import img2 from "../assets/potfolioImages/img2.svg"
import img3 from "../assets/potfolioImages/img3.svg"
import img4 from "../assets/potfolioImages/img4.svg"
import img5 from "../assets/potfolioImages/img5.svg"
import img6 from "../assets/potfolioImages/img6.svg"
import img7 from "../assets/potfolioImages/img7.svg"
import img8 from "../assets/potfolioImages/img8.svg"

import "./Phome.css"

const Phome = () => {
  return (
    <>
    <Box className="phome-xs-container">
        <Box className="top-xs-container">
            <Typography className="heading-phome" variant="h6">Work</Typography>
            <Typography variant="h4" className="portfolio-phome">Portfolio</Typography>
            <Typography className="text-phome">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Typography>
        </Box>
        <Box>
            <img src={img1} alt="img-1" className="each-image-phome"/>
            <img src={img2} alt="img-2" className="each-image-phome"/>
            <img src={img3} alt="img-3" className="each-image-phome"/>
            <img src={img4} alt="img-4" className="each-image-phome"/>
            <img src={img5} alt="img-5" className="each-image-phome"/>
            <img src={img6} alt="img-6" className="each-image-phome"/>
            <img src={img7} alt="img-7" className="each-image-phome"/>
            <img src={img8} alt="img-8" className="each-image-phome"/>
        </Box>
        <Button variant="contained" className="phome-button">Learn More</Button>
    </Box>
    <Box className="phome-lg-container">
        <Box className="top-xs-container">
            <Typography className="heading-phome" variant="h6">Work</Typography>
            <Typography variant="h4" className="portfolio-phome">Portfolio</Typography>
            <Typography className="text-phome">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Typography>
        </Box>
        <Box className="ph-images-container">
            <img src={img1} alt="img-1" className="each-image-phome"/>
            <img src={img2} alt="img-2" className="each-image-phome"/>
            <img src={img3} alt="img-3" className="each-image-phome"/>
            <img src={img4} alt="img-4" className="each-image-phome"/>
            <img src={img5} alt="img-5" className="each-image-phome"/>
            <img src={img6} alt="img-6" className="each-image-phome"/>
            <img src={img7} alt="img-7" className="each-image-phome"/>
            <img src={img8} alt="img-8" className="each-image-phome"/>
        </Box>
        <Button variant="contained" className="phome-button" sx={{fontSize:"30px"}}>Learn More</Button>
    </Box>
    </>
  )
}

export default Phome