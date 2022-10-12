import styled from "styled-components";

export const ContainerRareListCard = styled.section`
    margin-bottom: 30px;
`
export const MovieRowLeft = styled.div`
    border-radius: 0px 10px 10px 0px;
    margin-top: 30px;
    position: absolute;
    width: 40px;
    height: 610px;
    background-color: rgba(0,0,0,0.6);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
    transition: all ease .5s;
    left: 0;
    &:hover{
        opacity: 1;
    }
`

export const MovieRowRight = styled.div`
    border-radius: 10px 0px 0px 10px;
    margin-top: 30px;
    position: absolute;
    width: 40px;
    height: 620px;
    background-color: rgba(0,0,0,0.6);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
    transition: all ease .5s;
    right: 0;
    &:hover{
        opacity: 1;
    }
`

export const MovieRowListArea = styled.div`
    overflow-x: hidden;
    padding-left:  30px;
`

export const MovieRowList = styled.div`
    transition: .2s;
    width: ${props => props.widthTotal}px;
    margin-left: ${props => props.marginLeft}px;
`