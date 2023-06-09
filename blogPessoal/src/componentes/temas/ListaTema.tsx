import { Box, Button, ButtonGroup, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import './ListaTema.css'
import { TextFormat } from "@material-ui/icons";
import Tema from "../../models/Tema";
import { busca } from "../../service/Service";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Card, CardActions, CardContent } from "@material-ui/core";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";

function ListaTema() {
const [temas, setTema] =useState<Tema[]>([])
const navigate = useNavigate();
const token = useSelector<TokenState, TokenState["token"] >(
  (state) => state.token
);


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
      
      <Grid container>
        <Box className="boxlist">
    {temas.map((tema) => (
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
          ))}
          </Box>
        </Grid>
          
          

    </>
  );
}

export default ListaTema;