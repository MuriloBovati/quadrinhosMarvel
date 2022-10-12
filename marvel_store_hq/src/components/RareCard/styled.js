import styled from "styled-components"; 

export const ContainerRareCardStyled = styled.div`
    display: inline-block;
    align-items: flex-end;
    box-shadow: 1px 1px 10px #202020; 
    margin-top: 30px;
    margin-left: 3px;
    width: 400px;
    zoom:1;
    cursor: pointer;
    background-image: url(${props => props.backgroudimg});
    background-repeat: no-repeat;
    background-size: cover;
    height: 600px;
    &:hover{
        transition: .5s;
        box-shadow: 1px 1px 10px rgba(241, 178, 15, 1);
    }
`
export const ElementsCard = styled.div`
    display: flex;
    align-items: flex-end; 
    width: 100%;
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;

    h1{
        text-align: center;
        text-decoration: none;
        background-color: rgba(54, 54, 54, .6) ;
        height: 110px;
        color: rgba(241, 178, 15, 1);
        padding: 10px;
    }

    a{
        width: 100%;
        text-decoration: none;

    }
` 