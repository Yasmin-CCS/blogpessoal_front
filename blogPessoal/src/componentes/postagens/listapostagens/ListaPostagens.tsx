import { Box, Button, ButtonGroup, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import './ListaPostagem.css'
import { TextFormat } from "@material-ui/icons";
import Postagem from "../../../models/Postagem";
import useLocalStorage from "react-use-localstorage";
import { busca } from "../../../service/Service";
import { Navigate, useNavigate } from "react-router-dom";

function ListaPostagens() {
const [postagens, setPostagem] =useState<Postagem[]>([])
const navigate = useNavigate();
const [token, setToken] = useLocalStorage ('token');

function getPostagem() {
  busca('/postagens', setPostagem, {
      headers: {
        Authorization: token
      }
  })
}

  useEffect(() => {
    getPostagem()
  }, [])

  useEffect(() => {
    if(token === ''){
      alert('Por favor efetue o Login para acessar essa página')
      navigate ('/login')
    }
  }, [])

  return(
    <>
    {postagens.map((postagem) => (
      
      <Grid container>
        <Box className="boxlist">
          <Box className="postagembox" >
            <Grid>
              <Typography><h4>Postagem {postagem.titulo}</h4></Typography>
              <Typography><h5>Título da Postagem</h5></Typography>
              <Typography><h6>Texto da Postagem</h6></Typography>
              <Typography><h6>21/05/2029</h6></Typography>
            </Grid>
            <Box>
              <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button>
                  Editar
                </Button>
                <Button>
                  Apagar
                </Button>
              </ButtonGroup>
            </Box>
          </Box>
          
        </Box>
      </Grid>
    ))}

    </>
  );
}

export default ListaPostagens