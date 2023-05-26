
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
import DeletarTema from './componentes/temas/deletartema/DeletarTema';
import FormularioPostagem from './componentes/postagens/cadastrarpostagem/CadastrarPostagem';
import DeletarPostagem from './componentes/postagens/deletarpostagem/DeletarPostagem';
import { Provider } from 'react-redux';
import store from './store/Store';

function App() {
  return (
    <>
    <Provider store={store}>
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
          <Route path='/formulariopostagens' element={<FormularioPostagem />}/>
          <Route path='/formulariopostagens/:id' element={<FormularioPostagem />}/>
          <Route path='/deletarpostagens/:id' element={<DeletarPostagem />}/>
          <Route path='/formulariotema' element={<CadastrarTema />}/>
          <Route path='/formulariotema/:id' element={<CadastrarTema />}/>
          <Route path='/deletartema/:id' element={<DeletarTema />}/>
          

          
        </Routes>
      </Grid>
      <Footer />
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
