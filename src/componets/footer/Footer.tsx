import {Box,Typography} from "@mui/material"

import footerFacebok from "../assets/footerImages/footerFacebook.png"
import pinsert from "../assets/footerImages/pin.png"
import youtube from "../assets/footerImages/youtube.png"
import watsapp from "../assets/footerImages/watsapp.png"
import twitter from "../assets/footerImages/twitter.png"
import tiktok from "../assets/footerImages/tiktok.png"
import insta from "../assets/footerImages/insta.png"

import "./Footer.css"

const Footer = () => {
  return (
    <Box id="contact">
    <Box className="footer-xs-container">
        <Box className="contact-container-xs">
            <img src={footerFacebok} alt="footerFacebok"/>
            <img src={insta} alt="insta"/>
            <img src={twitter} alt="twitter"/>
            <img src={pinsert} alt="pinsert"/>
            <img src={watsapp} alt="watsapp"/>
            <img src={tiktok} alt="tiktok"/>
            <img src={youtube} alt="youtube"/>
        </Box>
        <Box className="footer-text-xs">
            <Typography sx={{color:"#fff"}}>@Start,2022. all rights reserved</Typography>
        </Box>
    </Box>
    <Box className="footer-large-container">
      <Box className="contact-container-xs">
          <img src={footerFacebok} alt="footerFacebok"/>
          <img src={insta} alt="insta"/>
          <img src={twitter} alt="twitter"/>
          <img src={pinsert} alt="pinsert"/>
          <img src={watsapp} alt="watsapp"/>
          <img src={tiktok} alt="tiktok"/>
          <img src={youtube} alt="youtube"/>
      </Box>
      <Box className="footer-text-xs">
          <Typography sx={{color:"#fff"}}>@Start,2022. all rights reserved</Typography>
      </Box>
    </Box>
  </Box>
  )
}

export default Footer