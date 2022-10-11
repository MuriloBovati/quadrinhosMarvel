import {Route, Routes} from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Pesquisa from '../pages/Pesquisa'
import Quadrinho from '../pages/Quadrinho'
import Carrinho from '../pages/Carrinho'

const Routers = () =>{
    return(
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Pesquisa' element={<Pesquisa/>}/>
            <Route path='/Quadrinho' element={<Quadrinho/>}/>
            <Route path='/Carrinho' element={<Carrinho/>}/>
        </Routes>
    )
}

export default Routers