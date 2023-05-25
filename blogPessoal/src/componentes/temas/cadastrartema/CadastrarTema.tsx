import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import React, { ChangeEvent, useEffect, useState } from "react"
import Tema from "../../../models/Tema";
import useLocalStorage from "react-use-localstorage";
import { useNavigate, useParams } from "react-router-dom";
import { buscaId, post, put } from "../../../service/Service";


function CadastrarTema() {
  const [tema, setTema] = useState<Tema>({
    id:0,
    descricao:''
  })
  const{ id} = useParams<{id: string}>();
  const [token, setToken] = useLocalStorage('token');
  const navigate = useNavigate();
  
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

  function updatedTema (event: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [event.target.name]: event.target.value,
    })
  }

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log('tema ' + JSON.stringify(tema))

    if (id !== undefined) {
      console.log(tema)
      put('/temas', tema, setTema, {
        headers: {
          Authorization: token
        }
      })
      alert('Tema atualizado com sucesso');
    } else {
      post('/temas', tema, setTema, {
        headers: {
          Authorization: token
        }
      })
      alert('Tema cadastrado com sucesso')
    }
    navigate('/temas')
  }

  return (
    <>
       <Grid container className='main'style={{ minHeight: '100vh' }}>
        <Grid>
          <form onSubmit={onSubmit}>
            <Box>
              <Typography >
              Cadastrar tema
              </Typography>
              <TextField 
              label='descrição do tema' 
              name='descricao' 
              type='text' 
              value={tema.descricao} 
              onChange={(event:ChangeEvent<HTMLInputElement>) => updatedTema(event)}>

              </TextField>
              <Button type='submit'>Cadastrar</Button>
            </Box>

          </form>
             
        </Grid>
        </Grid>
    </>
  );
}

export default CadastrarTema
