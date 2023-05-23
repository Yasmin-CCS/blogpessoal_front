import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import './footer.css'

function Footer(){
  return(
    
   
    <Box
      component="footer" id="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
      }}
    >
      <Container maxWidth="sm">
        <Typography className="footertxt">
          Feito por Yasmin 2023
        </Typography>
      </Container>
    </Box>
 
  );
}

export default Footer