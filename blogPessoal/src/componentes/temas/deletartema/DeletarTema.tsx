import React, { useEffect, useState } from 'react'
import {Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import './DeletarTema.css';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { buscaId, deleteId } from '../../../service/Service';
import Tema from '../../../models/Tema';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';


function DeletarTema() {
  const navigate = useNavigate();
  const{ id} = useParams<{id: string}>();
  const token = useSelector<TokenState, TokenState["token"] >(
    (state) => state.token
  );
  
  
  const [tema, setTema] = useState<Tema>({
    id:0,
    descricao:''
  })
  
  useEffect(() => {
    if(token === ''){
      toast.error('Você precisa estar logado para acessar essa página',{
        position:'top-center',
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

  useEffect(() => {
    if(id !== undefined){
      findById(id)
    }
  }, [id])

  async function findById(id:string) {
    buscaId(`/temas/${id}`, setTema,{
      headers: {
        Authorization: token
      }
    })
  }

  function sim(){
    navigate('/temas')
    deleteId(`/temas/${id}`, {
      headers: {
        Authorization : token
      }
    });
    toast.success('Postagem atualizada com sucesso',{
      position:'top-center',
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
      navigate('/temas')
    }

  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o Tema:
              </Typography>
              <Typography color="textSecondary">
                {tema?.descricao}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button variant="contained"onClick={sim} className="marginLeft" size='large' color="primary">
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button variant="contained" onClick={não} size='large' color="secondary">
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarTema;