import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './estaticos/footer/Footer'
import Home from './paginas/home/Home';
import Navbar from './estaticos/navbar/Navbar';
import './App.css'
import Login from './paginas/login/Login';
import { Grid } from '@mui/material';

function App() {
    return (
  <>
    <BrowserRouter>
      <Navbar />
      <Grid container className='main'style={{ minHeight: '100vh' }} sm={6}>
        <Routes>
          <Route path='/' element={<Login />}/> 
          <Route path='/login' element={<Login />}/>  
          <Route path='/home' element={<Home />}/>
        </Routes>
      </Grid>
      <Footer />
    </BrowserRouter>
  </>
  )
}

export default App
