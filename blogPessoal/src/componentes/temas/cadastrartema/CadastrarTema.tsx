import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import React, { ChangeEvent, useEffect, useState } from "react"
import Tema from "../../../models/Tema";
import useLocalStorage from "react-use-localstorage";
import { useNavigate, useParams } from "react-router-dom";
import { buscaId, post, put } from "../../../service/Service";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";


function CadastrarTema() {
  const [tema, setTema] = useState<Tema>({
    id:0,
    descricao:''
  })
  const{ id} = useParams<{id: string}>();
  const token = useSelector<TokenState, TokenState["tokens"] >(
    (state) => state.tokens
  );
  
  const navigate = useNavigate();
  
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
      toast.success('Tema atualizada com sucesso',{
        position:'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        progress: undefined,
      })
    } else {
      post('/temas', tema, setTema, {
        headers: {
          Authorization: token
        }
      })
      toast.success('Tema cadastrada com sucesso',{
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
