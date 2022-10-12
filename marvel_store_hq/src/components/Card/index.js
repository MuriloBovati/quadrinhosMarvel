import { ContainerCard } from "./styled"

const Card = ({id, title, description, tumbnail}) => {
    return(
        <ContainerCard>
            <h1>{id}</h1>
            <h1>{title}</h1>
            <h1>{description}</h1>
            <img src={tumbnail}/>
        </ContainerCard>
    )
}

export default Card