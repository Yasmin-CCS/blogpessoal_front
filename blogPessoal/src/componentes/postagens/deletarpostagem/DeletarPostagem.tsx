import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import Postagem  from '../../../models/Postagem';
import { buscaId, deleteId } from '../../../service/Service';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function DeletarPostagem() {
  const token = useSelector<TokenState, TokenState["token"] >(
    (state) => state.token
  );
  
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const [post, setPost] = useState<Postagem>({
    id: 0,
    titulo: '',
    texto: '',
    data: '',
    tema: null,
  });

  async function getById(id: string) {
    await buscaId(`/postagens/${id}`, setPost, {
      headers: {
        Authorization: token,
      },
    });
  }

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
  }, [])

  useEffect(() => {
    if (id !== undefined) {
      getById(id);
    }
  }, []);

  function sim(){
    navigate('/postagens')
    deleteId(`/postagens/${id}`, {
      headers: {
        Authorization : token
      }
    });
    toast.success('Postagem deleteda com sucesso',{
      position:'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      progress: undefined,
    })
  }

    function não() {
      navigate('/postagens')
    }

  return (
    <>
      <Grid container justifyContent={'center'} my={2}>
        <Grid item xs={4}>
          <Typography variant="h5" align="center">
            Tem certeza de que quer apagar a postagem?
          </Typography>
          <Grid
            item
            xs={12}
            border={1}
            borderRadius={2}
            borderColor={'lightgray'}
            p={2}
          >
            <Typography>Postagem:</Typography>
            <Typography>{post.titulo}</Typography>
            <Typography>{post.texto}</Typography>

            <Typography>Tema: {post.tema?.descricao}</Typography>

            <Box display={'flex'} gap={4}>
              <Button fullWidth variant="contained" onClick={não} color="primary">
                cancelar
              </Button>
              <Button fullWidth variant="contained"onClick={sim} color="secondary">
                apagar
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default DeletarPostagem;