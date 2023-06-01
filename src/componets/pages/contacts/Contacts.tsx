import {Box} from "@mui/material"
import Contactpage from "../../contactsPage/Contactpage"
import Navbar from "../../navbar/Navbar"
import Footer from "../../footer/Footer"

const Contacts = () => {
  return (
    <Box>
      <Navbar/>
        <Contactpage/>
        <Footer/>
    </Box>
  )
}

export default Contacts