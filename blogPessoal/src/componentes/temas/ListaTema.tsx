import { Box, Button, ButtonGroup, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import './ListaTema.css'
import { TextFormat } from "@material-ui/icons";
import Tema from "../../models/Tema";
import useLocalStorage from "react-use-localstorage";
import { busca } from "../../service/Service";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Card, CardActions, CardContent } from "@material-ui/core";

function ListaTema() {
const [temas, setTema] =useState<Tema[]>([])
const navigate = useNavigate();
const [token, setToken] = useLocalStorage ('token');

async function getTema() {
  await 
  busca('/temas', setTema, {
      headers: {
        Authorization: token
      }
  })
}

  useEffect(() => {
    getTema()
  }, [])

  useEffect(() => {
    if(token === ''){
      alert('Por favor efetue o Login para acessar essa página')
      navigate('/login')
    }
  }, [])

  return(
    <>
    {temas.map((tema) => (
      
      <Grid container>
        <Box className="boxlist">
          <Card className="postagembox" >
            <CardContent>
              <Typography><h5>{tema.descricao}</h5></Typography>
              <Typography><h4>Tema n°: {tema.id}</h4></Typography>

            </CardContent>
            <CardActions>
              <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Link to={`/formulariotema/${tema.id}`}>
                <Button>
                  Editar
                </Button>
                </Link>
                <Link to={`/deletartema/${tema.id}`}>
                <Button>
                  Apagar
                </Button>
                </Link>
              </ButtonGroup>
            </CardActions>
          </Card>
          </Box>
        </Grid>
          
          ))}

    </>
  );
}

export default ListaTema;