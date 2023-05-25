
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './componentes/estaticos/footer/Footer'
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import Cadastrar from './paginas/cadastrar/Cadastrar';
import Navbar from './componentes/estaticos/navbar/Navbar';
import './App.css';
import { Grid } from '@mui/material';
import ListaPostagem from './componentes/postagens/listapostagem/ListaPostagem';
import ListaTema from './componentes/temas/ListaTema';
import CadastrarTema from './componentes/temas/cadastrartema/CadastrarTema';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Grid container className='main'style={{ minHeight: '100vh' }}>
        <Routes>
          <Route path='/' element={<Login />}/> 
          <Route path='/login' element={<Login />}/>  
          <Route path='/home' element={<Home />}/>
          <Route path='/cadastrar' element={<Cadastrar />}/>
          <Route path='/postagens' element={<ListaPostagem />}/>
          <Route path='/temas' element={<ListaTema />}/>
          <Route path='/formulariotema' element={<CadastrarTema />}/>
          <Route path='/formulariotema/:id' element={<CadastrarTema />}/>
          

          
        </Routes>
      </Grid>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
