import { Component } from 'react'


import { Box,Typography,Button,Avatar,Menu,MenuItem,ListItemIcon,Divider,IconButton,Tooltip} from '@mui/material'

import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import navImage from "../assets/navlogo-2.png"
import menuBars from "../assets/menubars.png"

import Navigation from '../navigation/Navigation'

import "./Navbar.css"

interface IProps{
  navigate : any
}

interface IState{
  isActive : boolean
  anchorEle:any,
}

class Navbar extends Component<IProps,IState>{

  state : IState = {
    isActive:false,
    anchorEle:null,
  }
  

  handleMenuBars=()=>{
    this.setState(p=> ({isActive  : !p.isActive}))
  }

  onClickNavegateHomePage=(a:string)=>{
    this.props.navigate(a)
  }



  handleClose=()=>{
    this.setState({anchorEle:null})

  }

  handleClick=(e:any)=>{
    this.setState({anchorEle:e.currentTarget})
  }

   
  render(){
    const {isActive} = this.state
    let getData:any = localStorage.getItem("userDetails")
    let data = JSON.parse(getData)
    const profileName = data?.userName
    const firstLetter = profileName[0].toUpperCase()
    const amarimage = data.userImage
    const open = Boolean(this.state.anchorEle)
    return (
      <Box>
      <Box className="navbar-xs-container">
        <Box className="navbar-con">
          <Box className="navlogo-container">
                <img src={navImage} alt="navLogo" className='nav-logo'/>
                <Typography variant="h5" sx={{fontWeight:"600"}} className="start-text">Start</Typography>
          </Box>
          <img src={menuBars} alt="menubars" className='menu-bars' onClick={this.handleMenuBars}/>
        </Box>
        {isActive && (
            <Box className="xs-nav-links">
              <Typography sx={{fontFamily:"Work Sans",fontWeight:"400",color:"#fff",fontSize:{xs:"18px",sm:"20px"},margin:"0px 20px 0px 0px",cursor:"pointer"}} onClick={()=>this.onClickNavegateHomePage("/home")}>Home</Typography>
              <Typography sx={{fontFamily:"Work Sans",fontWeight:"400",color:"#fff",fontSize:{xs:"18px",sm:"20px"},margin:"0px 20px 0px 0px",cursor:"pointer"}} onClick={()=>this.onClickNavegateHomePage("/portfolio")}>Portfolio</Typography>
              <Typography sx={{fontFamily:"Work Sans",fontWeight:"400",color:"#fff",fontSize:{xs:"18px",sm:"20px"},margin:"0px 20px 0px 0px",cursor:"pointer"}} onClick={()=>this.onClickNavegateHomePage("/services")}>Services</Typography>
              <Typography sx={{fontFamily:"Work Sans",fontWeight:"400",color:"#fff",fontSize:{xs:"18px",sm:"20px"},margin:"0px 20px 0px 0px",cursor:"pointer"}} onClick={()=>this.onClickNavegateHomePage("/contacts")}>Contact</Typography >
              <Typography sx={{fontFamily:"Work Sans",fontWeight:"400",color:"#fff",fontSize:{xs:"18px",sm:"20px"},margin:"0px 20px 0px 0px",cursor:"pointer"}} onClick={()=>this.onClickNavegateHomePage("/signin")}>Logout</Typography >

              </Box>
              )}
      </Box>
      <Box className="navbar-large-container">
        <Box className="navbar-con">
          <Box className="navlogo-container">
                <img src={navImage} alt="navLogo" className='nav-logo'/>
                <Typography variant="h5" sx={{fontWeight:"600"}} className="start-text">Start</Typography>
          </Box>
          <Box className="nav-elements-large">
            <Typography sx={{fontFamily:"Work Sans",fontWeight:"400",color:"#fff",fontSize:{md:"20px"},margin:"0px 20px 0px 0px",cursor:"pointer"}} onClick={()=>this.onClickNavegateHomePage("/home")}>Home</Typography>
            <Typography sx={{fontFamily:"Work Sans",fontWeight:"400",color:"#fff",fontSize:{md:"20px"},margin:"0px 20px 0px 0px",cursor:"pointer"}} onClick={()=>this.onClickNavegateHomePage("/portfolio")}>Portfolio</Typography>
            <Typography sx={{fontFamily:"Work Sans",fontWeight:"400",color:"#fff",fontSize:{md:"20px"},margin:"0px 20px 0px 0px",cursor:"pointer"}} onClick={()=>this.onClickNavegateHomePage("/services")}>Services</Typography>
            <Typography sx={{fontFamily:"Work Sans",fontWeight:"400",color:"#fff",fontSize:{md:"20px"},margin:"0px 0x 0px 0px",cursor:"pointer"}} onClick={()=>this.onClickNavegateHomePage("/contacts")}>Contact</Typography >
            <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
              {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography>
              <Typography sx={{ minWidth: 100 }}>Profile</Typography> */}
              <Tooltip title="Account settings">
                <IconButton
                  onClick={this.handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32,bgcolor:"lightblue" }} src={amarimage} alt="amar" />
                    
                  
                </IconButton>
              </Tooltip>
            </Box>
          <Menu
            anchorEl={this.state.anchorEle}
            id="account-menu"
            open={open}
            onClose={this.handleClose}
            onClick={this.handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={this.handleClose}>
              <Avatar /> Profile
            </MenuItem>
            <MenuItem onClick={this.handleClose}>
              <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem onClick={this.handleClose}>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              Add another account
            </MenuItem>
            <MenuItem onClick={this.handleClose}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={()=>this.onClickNavegateHomePage("/signin")}>
              <ListItemIcon>
                <Logout fontSize="small"/>
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
    </Box>
          </Box>
        </Box>
      </Box>
      </Box>
    )

    
  }
}


export default Navigation(Navbar)