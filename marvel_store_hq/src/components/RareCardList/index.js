import RareCard from "../RareCard"
import api from "../../API/api"
import { ContainerRareListCard, MovieRowLeft, MovieRowRight, MovieRowListArea, MovieRowList } from "./styled"
import { useState, useEffect } from "react"
import listQuadrinho from "../../sessionStorage/session"
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const RareCardList = () => {

    const items = 10
    const [scrollx, setScrollx] = useState(0)

    const handleLeftArrow = () =>{
        let x = scrollx + Math.round(window.innerWidth / 2)
        if(x > 0){
            x = 0
        }
        setScrollx(x)
        console.log(scrollx)
    }
    const handleRightArrow = () =>{
        let x = scrollx - Math.round(window.innerWidth / 2)
        let totalList = items * 400
        if((window.innerWidth - totalList) > x){
            x = (window.innerWidth - totalList) - 400
        }
        setScrollx(x)
    }

    const [listaRaros, setListaRaros] = useState([])

    useEffect(() => {
        api.get('/comics')
        .then(resp => {
            listQuadrinho(resp.data.data.results)
            setListaRaros(JSON.parse(sessionStorage.getItem("QuadrinhosRaros")))
        })
        .catch(err => console.log('log Erro', err))
    }, [])

    return(
        <ContainerRareListCard>
            <MovieRowLeft onClick={handleLeftArrow}>
                <AiFillCaretLeft/>
            </MovieRowLeft>
            <MovieRowRight onClick={handleRightArrow}>
                <AiFillCaretRight/>
            </MovieRowRight>
            <MovieRowListArea>
                <MovieRowList 
                    marginLeft={scrollx}
                    widthTotal={items * 500}>

                    {listaRaros.length > 0  &&
                        listaRaros.map((quadrinho)=> {
                            return(
                                <RareCard quadrinho={quadrinho}/>
                            )
                        })
                    }
                </MovieRowList>
            </MovieRowListArea>

        </ContainerRareListCard>
    )
}

export default RareCardList