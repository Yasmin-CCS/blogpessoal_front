import React, { ChangeEvent, useEffect, useState } from 'react';
import {Box, Button, Grid, TextField, Typography} from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import './Cadastrar.css';
import useLocalStorage from 'react-use-localstorage';
import { api } from '../../service/Service';
import Usuario from '../../models/Usuario';
import { cadastrarUsuario } from '../../service/Service';

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
    alert('Usuario cadastrado com sucesso, clique para Login')
  }else{
      alert('Dados inconsistentes. Por favor verifique as informações')
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