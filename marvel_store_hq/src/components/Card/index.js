import { ContainerCard, TituloQuadrinho, ValorQuadrinho } from "./styled"

const testImgFundo = (HQ) =>{
    const url = `${HQ.thumbnail.path}`
    const urlDown = `http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available`
    let opacity = 1
    if(url !== urlDown){
        opacity = 0
    }
    return opacity
}

const valorHQ = (HQ) =>{
    let valor = 0

    if(HQ.id > 10000){
        valor = HQ.id / 600
    } else if(HQ.id > 1000){
        valor = HQ.id / 50
    } else if(HQ.id > 100) {
        valor = HQ.id / 100
    } else {
        valor = HQ.id
    }
    return valor
}

const Card = ({HQ}) => {
    return(
        <ContainerCard imgQuadrinho={`${HQ.thumbnail.path}.${HQ.thumbnail.extension}`} Op={testImgFundo(HQ)}>
            <TituloQuadrinho>
                <h1>{HQ.title}</h1>
            </TituloQuadrinho>
            <ValorQuadrinho>
                <span>R${valorHQ(HQ).toFixed(2)}</span>
            </ValorQuadrinho>
        </ContainerCard>
    )
}

export default Card