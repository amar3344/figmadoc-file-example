import {Box} from "@mui/material"
import Navbar from "../../navbar/Navbar"
import Footer from "../../footer/Footer"
import Services from "../../servicespage/Services"

const ServicePage = () => {
  return (
    <Box>
        <Navbar/>
        <Services/>
        <Footer/>
    </Box>
  )
}

export default ServicePage