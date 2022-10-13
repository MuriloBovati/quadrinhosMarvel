import React from "react"
import {Link} from "react-router-dom"
import { ContainerRareCardStyled, ElementsCard } from "./styled"

const RareCard = (quadrinho) => {

    return(
        <Link to="Carrinho">
            <ContainerRareCardStyled 
            backgroudimg={`${quadrinho.quadrinho.thumbnail.path}.${quadrinho.quadrinho.thumbnail.extension}`}>
                    <ElementsCard>
                            <h1>{quadrinho.quadrinho.title}</h1>
                    </ElementsCard>
            </ContainerRareCardStyled>
        </Link>
    )
}

export default RareCard