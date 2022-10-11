import {Route, Routes} from 'react-router-dom'
import App from '../App'
import Pesquisa from '../pages/Pesquisa'
import Quadrinho from '../pages/Quadrinho'
import Carrinho from '../pages/Carrinho'
import Contato from '../pages/Contato'


const Routers = () =>{
    return(
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/Pesquisa' element={<Pesquisa/>}/>
            <Route path='/Quadrinho' element={<Quadrinho/>}/>
            <Route path='/Carrinho' element={<Carrinho/>}/>
            <Route path='/Contato' element={<Contato/>}/>
        </Routes>
    )
}

export default Routers