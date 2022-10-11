import {Link} from 'react-router-dom'
import { StyledHeader} from './styled'
import LogoMarvel from '../../img/Marvel_Studios_logo_2016.png'
import ImgCarrinho from '../../img/carrinho-de-compras01.png'

const Header = () => {
    return(
        <StyledHeader>
            <img src={LogoMarvel}/>
            <nav>
                <Link to="/">Home</Link>
                <Link to="Pesquisa">Raros</Link>
                <Link to="Pesquisa">Categoria</Link>
                <Link to="Contato">Contato</Link>
                <Link to="Carrinho"><img src={ImgCarrinho}/></Link>
            </nav>
        </StyledHeader>
    )
}

export default Header