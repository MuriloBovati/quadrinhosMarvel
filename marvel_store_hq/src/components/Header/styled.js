import styled from 'styled-components'

export const StyledHeader = styled.header`
    display: flex;
    background-image: linear-gradient(rgba(32, 32, 32, .5) , rgba(32, 32, 32, 0.0));
    color: #f00;
    width: 100%;
    height: 100px;
    align-items: center;
    transition: .5s;
    position: fixed;

    &:hover{
        background-color: #202020;

        img{
            opacity: 1;
            transition: .5s;
        }

        a{
            opacity: 1;
        }
    }

    img{
        height: 60px;
        opacity: 0.3;
        transition: .5s;
    }
    nav{
        display: flex;
        margin-left: 100px;
        height: 60px;
        align-items: flex-end;
        justify-content: end;
        width: 100%;
        margin-right: 50px;
    }
    a{
        opacity: .2;
        color: #ffff;
        margin-left: 30px;
        text-decoration: none;
        font-size: 1.2em;
    }

    input{

    }
`

