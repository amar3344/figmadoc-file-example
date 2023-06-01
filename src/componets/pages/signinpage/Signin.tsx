import React, { Component } from 'react'
import {Box,Button,Typography,TextField} from "@mui/material"

import Navigation from '../../navigation/Navigation'

import "./Signin.css"

interface IProps{
    navigate : any
}

interface IState{
    passwordInput:string,
    emailInput:string,
    isPasswordError:boolean,
    isEmailError:boolean,
    errorDisplay:boolean,
}


class Signin extends Component<IProps,IState> {
    state:IState = {passwordInput:"",emailInput:"",isPasswordError:false,
    isEmailError:false,errorDisplay:false}

    handleSignUp=(a:string)=>{
        this.props.navigate(a)
    }


    getValidDetails=(e : any)=>{
        e.preventDefault()
        const getItem:any = localStorage.getItem("userDetails")
        console.log(getItem)
        const item = JSON.parse(getItem)
        console.log(item)

        if(getItem === null){
            this.setState({errorDisplay : true})
        }else{
            if(this.state.emailInput === item.userEmail){
                if(this.state.passwordInput === item.userPassword){
                    this.props.navigate("/home")
                }else{
                    // alert("Invalid Password")
                    // this.setState(p =>({isPasswordError : true}))
                    this.setState({errorDisplay : true})
                }
            }else{
                // alert("user Details are Invalid")
                // this.setState(p =>({isEmailError : true}))
                this.setState({errorDisplay : true})
            }
        }

    }

    onBlurEmail=()=>{
        if(this.state.emailInput.trim() === ""){
            this.setState({isEmailError : true})
        }else{
            this.setState({isEmailError : false})
        }
    }

    onBlurPassword=()=>{
        if(this.state.passwordInput.trim() === ""){
            this.setState({isPasswordError : true})
        }else{
            this.setState({isPasswordError : false})
        }
    }

    render() {
        return (
            <Box className="sign-in-main-container">
            <Box className="sign-in-page-small-devices">
                <iframe title="sign-in" className="sign-in-iframe" src="https://embed.lottiefiles.com/animation/106680"></iframe>
                <Box>
                    <form className='form-className-sign-in' onSubmit={this.getValidDetails} >
                        <Box className="each-input-sign-up">
                            <Typography sx={{color:"#000",fontWeight:"600"}}>Email*</Typography>
                            <TextField required sx={{bgcolor:"lightgrey",borderRadius:"8px"}} type="email" helperText={this.state.isEmailError && "Please Enter Valid Email"} value={this.state.emailInput} placeholder="email"
                             onChange={(e)=>this.setState({emailInput:e.target.value.trim()})} onBlur={this.onBlurEmail}/>
                        </Box>
                        <Box className="each-input-sign-up">
                            <Typography sx={{color:"#000",fontWeight:"600"}}>Password*</Typography>
                            <TextField required type="password" sx={{bgcolor:"lightgrey",borderRadius:"8px"}} helperText={this.state.isPasswordError && "Please Provide Valid Password"} value={this.state.passwordInput}
                             placeholder="password" className="text-input" onChange={(e)=>this.setState({passwordInput:e.target.value.trim()})} onBlur={this.onBlurPassword}/>
                        </Box>
                        <Button variant="contained" type="submit" >Sign in</Button>
                        {this.state.errorDisplay && <Typography sx={{color:"red"}}>Provide valid credentials</Typography>}
                    </form>
                    <Box className="extra-button">
                        <Typography sx={{padding:"2px 0px 0px 0px",fontSize:"12px",color:"blue"}} >don't have an account </Typography>
                        <Button variant="contained" sx={{fontSize:"10px"}}  onClick={()=>this.handleSignUp("/")}>Sign up</Button>
                    </Box>
                </Box>
            </Box>
            <Box className="sign-in-page">
            <iframe title="sign-in" className="sign-in-iframe" src="https://embed.lottiefiles.com/animation/106680"></iframe>
            <Box>
                <form className='form-className-sign-in' onSubmit={this.getValidDetails} >
                    <Typography>Login</Typography>
                    <Box className="each-input-sign-up">
                        <Typography sx={{color:"#000",fontWeight:"600"}}>Email</Typography>
                        <TextField required type="email" sx={{bgcolor:"lightgrey",borderRadius:"8px"}}   helperText={this.state.isEmailError?"Please Enter Valid Email":null} value={this.state.emailInput} 
                        placeholder="email" className="text-input" onChange={(e)=>this.setState({emailInput:e.target.value})} onBlur={this.onBlurEmail}/>
                    </Box>
                    <Box className="each-input-sign-up">
                        <Typography sx={{color:"#000",fontWeight:"600"}}>Password</Typography>
                        <TextField required type="password" sx={{bgcolor:"lightgrey",borderRadius:"8px"}} helperText={this.state.isPasswordError ? "Please Provide Valid Password" : null} value={this.state.passwordInput}
                        onBlur={this.onBlurPassword} placeholder="password" className="text-input" onChange={(e)=>this.setState({passwordInput:e.target.value})}/>
                    </Box>
                    <Button variant="contained" type="submit">Sign in</Button>
                    {this.state.errorDisplay && <Typography sx={{color:"red"}}>Provide valid credentials</Typography>}
                </form>
                <Box className="extra-button">
                    <Typography>don't have an account </Typography>
                    <Button variant="contained" onClick={()=>this.handleSignUp("/")}>Sign up</Button>
                </Box>
            </Box>
            </Box>
            </Box>
        )
}
}


export default Navigation(Signin)
