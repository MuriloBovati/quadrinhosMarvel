import { useState, useEffect } from "react"
import { ContainerCommunHQ } from "./styled"
import Card from "../Card"

const CardList = () =>{

    const [listaQuadrinhos, setListaQuadrinhos] = useState([])

    useEffect(() => {
        const newlista = JSON.parse(sessionStorage.getItem("QuadrinhosComun"))
        setListaQuadrinhos(newlista)
    }, [])
    
    return(
        <ContainerCommunHQ>
            <h1>Quadrinhos Comun</h1>
            {listaQuadrinhos.length > 0 &&
                listaQuadrinhos.map((quadrinho) => {
                    return(
                        <Card 
                        key={listaQuadrinhos.indexOf(quadrinho)} 
                        HQ={quadrinho}/>
                    )
                })
            }
        </ContainerCommunHQ>
    )
}

export default CardList