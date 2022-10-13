import Home from './pages/Home'
import Quadrinho from './pages/Quadrinho'
import Carrinho from './pages/Carrinho'
import Contato from './pages/Contato'

const ControlRotas = () =>{
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Quadrinho' element={<Quadrinho/>}/>
            <Route path='/Carrinho' element={<Carrinho/>}/>
            <Route path='/Contato' element={<Contato/>}/>
        </Routes>
    )
}

export default ControlRotas
