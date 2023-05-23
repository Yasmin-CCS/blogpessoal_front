import React from 'react';
import {Box, Button, Grid, Typography} from '@material-ui/core';
import './Home.css';
import TabsPostagem from '../../componentes/postagens/tabpostagem/TabsPostagem';

function Home() {
  return(
    <>
    <Grid container className='main'>
      <Box  display="flexbox" className="homepage">
      <Grid item xs={12} id='montanha' className="hooveroverlay">
        <Box className="hometxt hooveroverlay">
       <h1>Seja bem vinde!</h1>
       <h2>Ao diário de bordo das suas viagens.</h2>
       <Box className='overlay'><p className='text'>"Liberdade de voar num horizonte qualquer,
       liberdade de pousar onde o coração quiser."<span>Cecília Meireles</span></p></Box>
        </Box>
       
      </Grid>
      <Grid className="homeinfos">
        <TabsPostagem/>
      </Grid>
      </Box>
      
    </Grid>
    </>
  );
}

export default Home;
