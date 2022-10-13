import styled from 'styled-components'

export const ContainerCard = styled.div `
    cursor: pointer;
    display: inline-block;
    background-image: url(${props => props.imgQuadrinho});
    background-repeat: no-repeat;
    background-size: cover;
    width: 260px;
    height: 400px;
    margin: 5px;
    border-radius: 10px;
    transition: .5s;
    &:hover{
        transition: .5s;
        box-shadow: 1px 1px 10px white;
    }

    h1{
        opacity: ${props => props.Op} ;
        color: white;
        padding: 10px;
        font-size: 1;
    }
`

export const QuadrinhoCard = styled.div`
    background-color: rgba(54, 54, 54, .3);
    width: 100%;
`
export const TituloQuadrinho = styled.div`
    background-image: linear-gradient(rgba(54, 54, 54, .9), rgba(54, 54, 54, .05));
    width: 100%;
`
export const ValorQuadrinho = styled.div`
    color: white;
`
