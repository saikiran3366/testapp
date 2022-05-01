import logo from './logo.svg';
import './App.css';
import Home from './screens/home';
import About from './screens/about';
import {Grid} from '@mui/material'
import Sidebar from './layout/sidebar';
import Routing from './routing';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (

    <Router>
      <Grid container lg={12} style={{backgroundColor:'red',height:'95vh'}}>
      <Grid item lg={2} style={{backgroundColor:'blue',height:'100%'}}>
        <Sidebar/>
      </Grid>
      <Grid item lg={10} style={{backgroundColor:'green',height:'100%'}}>
        <Routing/>
      </Grid>
    </Grid>
    
    </Router>
    
  );
}

export default App;
