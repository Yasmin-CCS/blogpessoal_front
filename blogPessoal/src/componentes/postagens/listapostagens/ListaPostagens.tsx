import { Box, Button, ButtonGroup, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import './ListaPostagem.css'
import { TextFormat } from "@material-ui/icons";
import Postagem from "../../../models/Postagem";
import useLocalStorage from "react-use-localstorage";
import { busca } from "../../../service/Service";
import { Navigate, useNavigate } from "react-router-dom";
import { Card, CardActions, CardContent } from "@material-ui/core";

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
          <Card className="postagembox" >
            <CardContent>
              <Typography><h5>Título da Postagem{postagem.titulo}</h5></Typography>
              <Typography><h4>Postagem: {postagem.id}</h4></Typography>
              <Typography><h6>{postagem.texto}</h6></Typography>
              <Typography><h6>{postagem.data}</h6></Typography>
            </CardContent>
            <CardActions>
              <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button>
                  Editar
                </Button>
                <Button>
                  Apagar
                </Button>
              </ButtonGroup>
            </CardActions>
          </Card>
          
        </Box>
      </Grid>
    ))}

    </>
  );
}

export default ListaPostagens