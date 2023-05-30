import React, { ChangeEvent, useEffect, useState } from 'react';
import {Box, Button, Grid, TextField, Typography} from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import './Cadastrar.css';
import useLocalStorage from 'react-use-localstorage';
import { api } from '../../service/Service';
import Usuario from '../../models/Usuario';
import { cadastrarUsuario } from '../../service/Service';
import { toast } from 'react-toastify';

function Cadastrar() {

  const [confirmarSenha,setConfirmarSenha] = useState<String>("")
  let history = useNavigate();

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome:'',
    usuario:'',
    senha:''
  })

  const [usuarioResult, setUsuarioResult] = useState<Usuario>(
    {
      id:0,
      nome:'',
      usuario:'',
      senha:''
    }
  )

  useEffect(() => {
    if(usuarioResult.id != 0) {
      history('/login')
    }
  }, [usuarioResult])

  function updateModel(event: ChangeEvent<HTMLInputElement>){
    setUsuario({
      ...usuario,
      [event.target.name]: event.target.value
    })
  }

  function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>){
    setConfirmarSenha(event.target.value)
  }

 async function enviar(event: ChangeEvent<HTMLFormElement>){
  event.preventDefault
  if(confirmarSenha === usuario.senha){
    cadastrarUsuario('/usuarios/cadastrar', usuario, setUsuarioResult)
    toast.success('Usuario cadastrado com sucesso!',{
      position:'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      progress: undefined,
    })
  }else{
    toast.error('Dados inconsistentes, por favor confira',{
      position:'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      progress: undefined,
    })
    }}

  return(
    <>
      <Grid 
      container
      alignItems={'center'}
      justifyContent={'center'}
      style={{minHeight: '100vh', backgroundColor: "#E6EAEF" }}
      className="gridcadastrar">


      <Grid container item xs={12}  >
          <Box className='janelacadastrar'>
            <form onSubmit={enviar} className="cadastrarform">
                <Typography variant="h3" className='cadastrotitle' gutterBottom align='center' >
                  Cadastro
                </Typography>
                <TextField 
                  id="nome"
                  name='nome'
                  label="nome"
                  color="primary"
                  variant="filled" type="textarea" fullWidth margin="normal"
                  value={usuario.nome}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}/>

                  <TextField 
                  id="email"
                  name='usuario'
                  label="e-mail"
                  color="primary"
                  variant="filled" type="textarea" fullWidth margin="normal"
                  value={usuario.usuario}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}/>
                                          

                  <TextField 
                  id="senha" 
                  name='senha' 
                  label="senha" 
                  variant="filled"  type="password" fullWidth margin="normal"
                  value={usuario.senha}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}/>

                  <TextField 
                  id="senha" 
                  name='senha' 
                  label="senha" 
                  variant="filled"  type="password" fullWidth margin="normal"
                  value={confirmarSenha}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(event)}/>

                            
              <Box marginTop={2} className='buttons'>
                  <Button size ="small" variant="outlined" className="cadastrarbutton" type="submit">
                    <Typography className='cadastrarbuttontxt'>
                    Cadastrar
                    </Typography>
                  </Button>
              </Box>

          </form>
          
        </Box>

      </Grid>
    </Grid>    
    </>
  );
}

export default Cadastrar;