import React from "react"
import {Link} from "react-router-dom"
import { ContainerRareCardStyled, ElementsCard } from "./styled"

const RareCard = (quadrinho) => {

    return(
        <ContainerRareCardStyled 
        backgroudimg={`${quadrinho.quadrinho.thumbnail.path}.${quadrinho.quadrinho.thumbnail.extension}`}>
            <ElementsCard>
                <Link to="Carrinho">
                    <h1>{quadrinho.quadrinho.title}</h1>
                </Link>
            </ElementsCard>
        </ContainerRareCardStyled>
    )
}

export default RareCard