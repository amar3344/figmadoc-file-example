import React, { Component } from 'react'
import {Box} from "@mui/material"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import "./ScrollButton.css"

export default class ScrollButton extends Component {

    onClickToTop=()=>{
              window.scrollTo(0,0)
            }
  render() {
    return (
            <Box className="scroll-button">
                <ArrowUpwardIcon className="arrow-button" onClick={this.onClickToTop} sx={{fontSize:"100px"}}/>
            </Box>
          )
  }
}



// import {Box} from "@mui/material"
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

// import "./ScrollButton.css"

// const ScrollButton = () => {

//     const onClickToTop=()=>{
//         window.scrollTo(0,0)
//     }

//   return (
//     <Box className="scroll-button">
//         <ArrowUpwardIcon className="arrow-button" onClick={onClickToTop} sx={{fontSize:"100px"}}/>
//     </Box>
//   )
// }

// export default ScrollButton



