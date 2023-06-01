import React, { Component } from 'react'
import {Box,Button,Typography,TextField} from "@mui/material"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import Navigation from '../../navigation/Navigation'


import "./SignUp.css"

let addUserDetails:any = ""

interface IProps{
    navigate:any
}

interface IState{
    nameInput:string,
    nameError:boolean,
    passwordInput:string,
    passwordError:boolean,
    visiblePasswordErr:boolean,
    emailInput:string,
    emailError:boolean,
    currentPassword:string,
    image:string,
    isDisplay:boolean,
    errMessage:boolean
    // userDetails:{}[]
}

class SignUp extends Component<IProps,IState> {
    state:IState = {nameInput:"",passwordInput:"",passwordError:false,visiblePasswordErr:false,emailInput:"",emailError:false,
    currentPassword:"",isDisplay:false,image:"",nameError:false,errMessage:false}


    onClickGotoLoginPage=(a:string)=>{
        this.props.navigate(a)
    }


    getUserDetailsFromInputs=(e:any)=>{
        console.log(e)

        const {nameInput,passwordInput,emailInput,image} = this.state
        e.preventDefault()

        
        if((nameInput.trim() && passwordInput.trim() && emailInput.trim())  === ""){
            this.setState({errMessage:true})
        }else{
             addUserDetails={
                // id:userDetails.length,
                userName:nameInput,
                userPassword:passwordInput,
                userEmail : emailInput,
                userImage:image
            }

            localStorage.setItem("userDetails",JSON.stringify(addUserDetails))
            this.onClickGotoLoginPage("/signin")

        }

    }

    handleSignIn=(a:string)=>{
        this.props.navigate(a)
    }

    displayPassword=()=>{
        this.setState(p=>({isDisplay : !p.isDisplay}))
    }

    getImage=(e:any)=>{
        // this.setState({image:e.target.value})
        this.setState({image: URL.createObjectURL(e.target.files[0])})
    }

   

    onBlurText=()=>{
        if(this.state.nameInput.trim() === ""){
            this.setState({nameError : true})
        }else{
            this.setState({nameError : false})
        }
    }

    onBlurEmail=()=>{
        if(this.state.emailInput.trim() === ""){
            this.setState({emailError:true})
        }else{
            this.setState({emailError:false})
        }
    }

    invisibelPasswordError=()=>{
        if(this.state.passwordInput === ""){
            this.setState({passwordError:true})
        }else{
            this.setState({passwordError:false})
        }
    }

    // onBlurVisiblePassword=()=>{
    //     this.setState({ visiblePasswordErr: true})
    // }


  render() {
    return (
        <Box className="main-container-singup">
        <Box className="sign-up-page-small-devices">
            <iframe title="sign-up-page" src="https://embed.lottiefiles.com/animation/63787" className="sign-up-className"></iframe>
            <Box className="form-sign-up-con">
                <form className='form-className' onSubmit={this.getUserDetailsFromInputs}>
                    <Box className="each-input-sign-up">
                        <Typography className="sign-up-labels" sx={{fontWeight:"600"}}>User Name*</Typography>
                        <TextField type="text" required value={this.state.nameInput} placeholder="name" className="text-input" onChange={(e:{target:{value:string}})=>this.setState({nameInput:e.target.value.trim()})}/>
                    </Box>
                    <Box className="each-input-sign-up">
                        <Typography className="sign-up-labels">Email*</Typography>
                        <TextField type="email" required value={this.state.emailInput} placeholder="email" className="text-input" onChange={(e)=>this.setState({emailInput:e.target.value.trim()})}/>
                    </Box>
                    <Box className="each-input-sign-up">
                        <Typography className="sign-up-labels">Password*</Typography>
                        <TextField  type={this.state.isDisplay ? "text" : "password"} required placeholder="password" value={this.state.passwordInput} className="text-input" onChange={(e)=>this.setState({passwordInput:e.target.value.trim()})}/>
                        <RemoveRedEyeIcon className="eye-icon" onClick={this.displayPassword}/>
                    </Box>
                    <Box className="each-input-sign-up">
                        <Typography className="sign-up-labels">Image</Typography>
                        <TextField type="file" placeholder="" onChange={this.getImage} className="text-input"/>
                    </Box>
                    <Box className="each-input-sign-up">
                        <Typography className="sign-up-labels">Phone Number</Typography>
                        <TextField type="number" placeholder="phone number" className="text-input number-input"/>
                    </Box>
                    <Button variant="contained" sx={{fontSize:"12px"}} type="submit">Sign Up</Button>
                    {this.state.errMessage && <Typography sx={{color:"red"}}>Please provide required* fields</Typography>}
                </form>
                <Box className="social-media-container">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" 
                    alt="google" width={30} className='social-images'/>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png"
                    alt="facebook" width={30} className='social-images'/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" alt="github" width={30} className='social-images'/>
                </Box>
                <Box className="extra-button">
                    <Typography sx={{fontSize:"12px",padding:"2px"}}>already have an account </Typography>
                    <Button variant="contained" sx={{fontSize:"10px"}} onClick={()=>this.handleSignIn("/signin")}>Sign In</Button>
                </Box>
            </Box>
        </Box>
        <Box className="sign-up-page">
        {/* <iframe title="sign-up-page" src="https://embed.lottiefiles.com/animation/63787" className="sign-up-className"></iframe> */}
        <Box>
            <Typography variant="h6" className="heading-sinup">Welcome To Lorem ipsum</Typography>
            <form className='form-className' onSubmit={this.getUserDetailsFromInputs}>
                <Box className="top-notch"><Box className="camera-className"></Box></Box>
                <Box className="each-input-sign-up">
                    <Typography className="sign-up-labels">User Name*</Typography>
                    <TextField required onBlur={this.onBlurText} helperText= { this.state.nameError ? "Please Enter Name" : null} type="text" value={this.state.nameInput} placeholder="name" className="text-input" onChange={(e)=>this.setState({nameInput:e.target.value.trim()})}/>
                </Box>
                <Box className="each-input-sign-up">
                    <Typography className="sign-up-labels">Email*</Typography>
                    <TextField required  type="email" onBlur={this.onBlurEmail} helperText= { this.state.emailError ? "Please Enter Email" : null} value={this.state.emailInput} placeholder="email" className="text-input" onChange={(e)=>this.setState({emailInput:e.target.value.trim()})}/>
                </Box>
                <Box className="each-input-sign-up">
                    <Typography className="sign-up-labels">Password*</Typography>
                    <TextField required type={this.state.isDisplay?"text":"password"} placeholder="password" value={this.state.passwordInput} className="text-input" onBlur={this.invisibelPasswordError}
                     onChange={(e)=>this.setState({passwordInput:e.target.value.trim()})} helperText= { this.state.passwordError ? "Please Enter password" : null} />
                    <RemoveRedEyeIcon className="eye-icon" onClick={this.displayPassword}/>
                </Box>
                <Box className="each-input-sign-up">
                    <Typography className="sign-up-labels">Image</Typography>
                    <TextField type="file" placeholder="Upload image" className="text-input" onChange={this.getImage}/>
                </Box>
                {/* <Button variant="contained" type="submit" >Sign Up</Button> */}
                <Box className="each-input-sign-up">
                    <Typography className="sign-up-labels">Phone Number</Typography>
                    <TextField type="number" placeholder="phone number" className="text-input number-input"/>
                </Box>
                <Button variant="contained" type="submit">Sign Up</Button>
                {this.state.errMessage && <Typography sx={{color:"red"}}>Please provide required* inputs</Typography>}
            </form>
            <Box className="social-media-container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" 
                alt="google" width={30}/>
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png"
                alt="facebook" width={30}/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" alt="github" width={30}/>
            </Box>
            <Box className="extra-button">
                <Typography sx={{padding:"5px"}}>already have an account </Typography>
                <Button variant="contained" className="large-device-extra-buttons" onClick={()=>this.handleSignIn("/signin")}>Sign In</Button>
            </Box>
        </Box>
        <img src="https://w7.pngwing.com/pngs/631/814/png-transparent-lorem-ipsum-logo-golden-pattern-blue-background-frame-blue-golden-frame.png" alt="loren ipsum"  className="sign-up-className"/>
        </Box>
        </Box>
    )
  }
}

export default Navigation(SignUp)