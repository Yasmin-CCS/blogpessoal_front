import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import SentimentSatisfiedAltRoundedIcon from '@mui/icons-material/SentimentSatisfiedAltRounded';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import {toast} from 'react-toastify'

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

  
  const navigate = useNavigate();

  function logout(){
    dispatch(addToken(''));
    toast.info('top-center',{
      position:'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      progress: undefined,
    })
    navigate('/login')
  }
  const token = useSelector<TokenState, TokenState["tokens"] >(
    (state) => state.tokens
  );

  const dispatch = useDispatch();
  
  var navBarComponent;

  if(token !== ""){
    navBarComponent = <AppBar position="static">
    <Toolbar variant="dense" id="nav">
      <Grid container justifyContent={'space-between'} className="navlist">
            <Box style={{ cursor: "pointer" }} >
            <Typography variant="h5" id="logo">
                Diário de Bordo
            </Typography>
        </Box>
  
        <Box display="flex" justifyContent="start" className="navlist">
            <Box mx={1} style={{ cursor: "pointer" }}>
              <Link to='/home'>
                <Typography variant="h6" className='txtdecorationnone'>
                    home
                </Typography>
              </Link>
            </Box>
          <Box display="flex" justifyContent="start">
            <Button
            id="postagem-button"
            aria-controls={openpost ? 'postagem-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openpost ? 'true' : undefined}
            onClick={handleClickpost}
            >
              <Box mx={1} style={{ cursor: "pointer" }}>
              <Typography variant="h6">
                postagens
              </Typography>
              
              </Box>
            </Button>
            </Box>
            <Menu
            id="menupostagem"
            anchorEl={anchorElpost}
            open={openpost}
            onClose={handleClosepost}
            MenuListProps={{
              'aria-labelledby': 'postagem-button',
            }}>          
            
            <Link to='/postagens'>
            <MenuItem onClick={handleClosepost} className='txtdecorationnone'>Minhas Postagens</MenuItem>
            </Link>
            <Link to='/formulariopostagens'>
            <MenuItem onClick={handleClosepost}>Nova Postagem</MenuItem>
            </Link>
          
            <Link to='/temas'>
            <MenuItem onClick={handleClosepost}>Meus Temas</MenuItem>
            </Link>
            <Link to='/formulariotema'>
            <MenuItem onClick={handleClosepost}>Cadastrar Tema</MenuItem>
            </Link>
          </Menu>
        
          <Box display="flex" justifyContent="start">
          <Button
            id="perfil-button"
            aria-controls={openperf ? 'perfil-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openperf ? 'true' : undefined}
            onClick={handleClickperf}
          >
              <SentimentSatisfiedAltRoundedIcon 
              id="buttonperficon"
              sx={{ fontSize: 35 }}
              />
          </Button>
            </Box>
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
            
            <MenuItem onClick={logout}>Logout</MenuItem>
          </Menu>
        
        </Box>
      </Grid>
    </Toolbar>
  </AppBar>
  }


  return (
    <>
    {navBarComponent}
    </>
  
    );
}

export default Navbar;
