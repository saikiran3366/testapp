import React,{Component} from 'react'
import Home from '../screens/home'
import About from '../screens/about'
import {Grid} from '@mui/material'


import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";



class Sidebar extends Component{
    render(){
        return(

            <Grid container style={{display:'flex',flexDirection:'column'}}>
                <Grid style={{backgroundColor:'red',height:70,alignItems:'center',display:'flex'}}> 
                    <Link to="/" style={{fontWeight:'bold',fontSize:30,textDecoration:'none'}}>Home</Link>
                </Grid>
                <Grid style={{backgroundColor:'yellow',height:70,alignItems:'center',display:'flex'}}> 
                <Link to="/about" style={{fontWeight:'bold',fontSize:30,textDecoration:'none'}}>About</Link>
                </Grid>

            </Grid>
            // <>
            //     <Link to="/">Home</Link><br/>
            //     <Link to="/about">About</Link>
            // </>
        )
    }
}

export default Sidebar