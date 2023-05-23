import React, { ChangeEvent, useEffect, useState } from 'react';
import {Box, Button, Grid, TextField, Typography} from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import useLocalStorage from 'react-use-localstorage';
import { api } from '../../service/Service';
import UsuarioLogin from '../../models/UsuarioLogin';
import { login } from '../../service/Service';

function Login() {
  let history = useNavigate();

  const [token, setToken] = useLocalStorage('token');
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({
    id: 0,
    usuario:'',
    senha:'',
 
    token:''
  })

  function updateModel(event: ChangeEvent<HTMLInputElement>){
    setUsuarioLogin({
      ...usuarioLogin,
      [event.target.name]: event.target.value
    })
  }
      useEffect(()=>{
        if(token != ''){
          history('/home')
        }
      }, [token])

  async function enviar(event: ChangeEvent<HTMLFormElement>){
    event.preventDefault();
    try{
      const resposta = await api.post('/usuarios/logar', usuarioLogin)
      setToken(resposta.data.token)

      alert("Usuario Logado com sucesso!")
    }catch(error){
      alert('Dados do usuário inconsistentes. Eroo ao logar!');
    }
    
    login('usuarios/logar', usuarioLogin, setUsuarioLogin)
  }

  return(
    <>
      <Grid 
      container
      alignItems={'center'}
      justifyContent={'center'}
      className='ridjanela'
      style={{minHeight: '100vh', backgroundColor: "#D8E2F4" }}>
      
      
      <Grid container item xs={6} className="loginpage" justifyContent={"center"} alignContent={'center'}>
          <Box className='janela' justifyContent={"center"} alignContent={'center'}>
            <form className="loginform" onSubmit={enviar}>
                <Typography variant="h3" gutterBottom align='center' >
                  Entrar
                </Typography>

                  <TextField 
                  id="email"
                  name='usuario'
                  label="e-mail"
                  color="primary"
                  variant="filled" type="textarea" fullWidth margin="normal"
                  value={usuarioLogin.usuario}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}/>
                                              
                  <TextField 
                  id="senha" 
                  name='senha' 
                  label="senha" 
                  variant="filled"  type="password" fullWidth margin="normal"
                  value={usuarioLogin.senha}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}/>
              
              <Box marginTop={2} className='buttons'>
                
                  <Button size ="small" variant="outlined" className="loginbutton" type="submit">
                    <Typography className='loginbuttontxt'>
                    Entrar
                    </Typography>
                  </Button>
                  <Button size ="small" variant="outlined" className="loginbutton" id="cadastrarlinkbutton"  type="submit">
                    <Link to='/cadastrar'>
                    <Typography className='loginbuttontxt'id='cadastrarlinkbuttontxt'>
                    Cadastrar
                    </Typography>
                    </Link>
                  </Button>
              </Box>

          </form>
          
        </Box>

        

        </Grid>
      
    </Grid>    
    </>
  );
}

export default Login;