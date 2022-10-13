import GlobalStyle from './globalStyle';
import Header from './components/Header';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Quadrinho from './pages/Quadrinho'
import Carrinho from './pages/Carrinho'
import Contato from './pages/Contato'

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Quadrinho' element={<Quadrinho/>}/>
            <Route path='/Carrinho' element={<Carrinho/>}/>
            <Route path='/Contato' element={<Contato/>}/>
      </Routes>
    </div>
  );
}

export default App;
