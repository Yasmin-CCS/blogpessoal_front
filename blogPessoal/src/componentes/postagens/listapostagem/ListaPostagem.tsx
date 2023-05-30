import { Box, Button, ButtonGroup, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import './ListaPostagem.css'
import { TextFormat } from "@material-ui/icons";
import Postagem from "../../../models/Postagem";
import { busca } from "../../../service/Service";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Card, CardActions, CardContent } from "@material-ui/core";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";

function ListaPostagem() {
const [postagens, setPostagem] =useState<Postagem[]>([])
const navigate = useNavigate();
const token = useSelector<TokenState, TokenState["tokens"] >(
  (state) => state.tokens
);


async function getPostagem() {
await busca('/postagens', setPostagem, {
      headers: {
        Authorization: token
      }
  })
}

  useEffect(() => {
    getPostagem()
  }, [postagens.length])

  useEffect(() => {
    if(token === ''){
      toast.error('Você precisa estar logado para acessar essa página',{
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
  }, [token])

  return(
    <>
    <Grid container className="listas">
      <Grid container my={2} px={4}>
      <Box display='flex' flexWrap={'wrap'} width={'100%'} className="boxlist">
        {postagens.map((postagem) => (
          <Grid item container xs={3}>
          <Card className="card" >
          <Typography className="titulocard">{postagem.titulo}</Typography>
          
          <Box className="textocard">
          <Typography>{postagem.texto}</Typography>
          </Box>
          
          <Typography>{new Intl.DateTimeFormat('pt-br', {
            dateStyle: 'full'
          }).format(new Date(postagem.data))}</Typography>
          
          <Typography>Tema: {postagem.tema?.descricao}</Typography>
          <Box display={'flex'} gap={4} >
            <Link to={`/formularioPostagem/${postagem.id}`}>
              <Button fullWidth variant='contained' className="buttoneditar">editar</Button>
            </Link>
            <Link to={`/apagarPostagem/${postagem.id}`}>
              <Button fullWidth variant='contained' className="buttonapagar">apagar</Button>
            </Link>
          </Box>
          </Card>
        </Grid>
        ))}
      </Box>
    </Grid>
    </Grid>
  </>
  );
}

export default ListaPostagem