import React,{Component} from 'react'
import Home from './screens/home'
import About from './screens/about'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  



class Routing extends Component{
    render(){
        return(
            
                <Routes>
                    <Route path="/" element={<Home/>} /> 
                    <Route path="/about" element={<About/>} /> 
                </Routes>
           
        )
    }
}

export default Routing