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


function DeletarTema() {
  const navigate = useNavigate();
  const{ id} = useParams<{id: string}>();
  const token = useSelector<TokenState, TokenState["tokens"] >(
    (state) => state.tokens
  );
  
  
  const [tema, setTema] = useState<Tema>({
    id:0,
    descricao:''
  })
  
  useEffect(() => {
    if(token === ''){
      alert('Por favor efetue o Login para acessar essa página')
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
    alert('Tema deletedo com sucesso');
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