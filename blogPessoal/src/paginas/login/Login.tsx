import React from 'react';
import {Box, Button, Grid, TextField, Typography} from '@material-ui/core';
import { Link } from 'react-router-dom'
import './Login.css';

function Login() {
  return(
    <>
    <Grid container direction='row' justifyContent="center" alignItems='center' className="loginpage">
      <Grid alignItems='center' xs={6}>     
          <Box >
            <form className="loginform">
                <Typography variant="h3" gutterBottom align='center'>
                  Entrar
                </Typography>

              
                  
                  <TextField id="email" label="e-mail" variant="outlined" type="textarea" fullWidth/>                            
                  <TextField id="senha" label="senha" variant="outlined"  type="password" fullWidth/>

               

              <Box textAlign ='center'>
                <Link to = '/home'>
                  <Button size ="small" variant="contained" className="loginbutton">
                    Entrar
                  </Button>
                </Link>
              </Box>
          </form>
        </Box>
      </Grid>
    </Grid>    
    </>
  );
}

export default Login;