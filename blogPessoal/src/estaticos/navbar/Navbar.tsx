import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import SentimentSatisfiedAltRoundedIcon from '@mui/icons-material/SentimentSatisfiedAltRounded';
import './Navbar.css';

function Navbar() {
  const [anchorElpost, setAnchorElpost] = React.useState<null | HTMLElement>(null);
  const [anchorElperf, setAnchorElperf] = React.useState<null | HTMLElement>(null);
  const openpost = Boolean(anchorElpost);
  const openperf = Boolean(anchorElperf);
  const handleClickpost = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElpost(event.currentTarget); 
  };
  const handleClickperf = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElperf(event.currentTarget); 
  };
  const handleClosepost = () => {
    setAnchorElpost(null);
  };
  const handleCloseperf = () => {
    setAnchorElperf(null);
  };
  return (
  <AppBar position="static">
  <Toolbar variant="dense" id="nav">
    <Grid container justifyContent={'space-between'}>
          <Box style={{ cursor: "pointer" }} >
          <Typography variant="h5" color="inherit">
              Vergonha Alheia
          </Typography>
      </Box>

      <Box display="flex" justifyContent="start">
          <Box mx={1} style={{ cursor: "pointer" }}>
              <Typography variant="h6" color="inherit">
                  home
              </Typography>
          </Box>
          <Grid item>
          <Button
          id="postagem-button"
          aria-controls={openpost ? 'postagem-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={openpost ? 'true' : undefined}
          onClick={handleClickpost}
          >
            <Typography variant="h6" color="inherit">
              postagens
            </Typography>
          </Button>
          </Grid>
          <Menu
          id="menupostagem"
          anchorEl={anchorElpost}
          open={openpost}
          onClose={handleClosepost}
          MenuListProps={{
            'aria-labelledby': 'postagem-button',
          }}
        >          
          <MenuItem onClick={handleClosepost}>Minhas Postagens</MenuItem>
          <MenuItem onClick={handleClosepost}>Meus Temas</MenuItem>
          <MenuItem onClick={handleClosepost}>Cadastrar Tema</MenuItem>
        </Menu>
      
          <Grid item>
        <Button
          id="perfil-button"
          aria-controls={openperf ? 'perfil-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={openperf ? 'true' : undefined}
          onClick={handleClickperf}
        >
            <SentimentSatisfiedAltRoundedIcon/>
        </Button>
          </Grid>
        <Menu
          id="menuperfil"
          anchorEl={anchorElperf}
          open={openperf}
          onClose={handleCloseperf}
          MenuListProps={{
            'aria-labelledby': 'perfil-button',
          }}
        >
          <MenuItem onClick={handleCloseperf}>Perfil</MenuItem>
          <MenuItem onClick={handleCloseperf}>Logout</MenuItem>
        </Menu>
      
      </Box>
    </Grid>
  </Toolbar>
</AppBar>
    );
}

export default Navbar;
