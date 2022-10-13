import {Link} from 'react-router-dom'
import { StyledHeader} from './styled'
import LogoMarvel from '../../img/Marvel_Studios_logo_2016.png'
import ImgCarrinho from '../../img/carrinho-de-compras01.png'

const Header = () => {
    return(
        <StyledHeader>
            <img src={LogoMarvel} alt="Logo Da Marvel"/>
            <nav>
                <Link to="/">Home</Link>
                <Link to="Contato">Contato</Link>
                <Link to="Carrinho">
                    <img src={ImgCarrinho} alt="Carrinho de compras"/>
                </Link>
            </nav>
        </StyledHeader>
    )
}

export default Header