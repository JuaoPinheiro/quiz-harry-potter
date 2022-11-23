import styled from "styled-components";
import Folha from '../../img/folha.jpg'
                

export const QuestionContainer = styled.div`
    text-align: center;
    max-width: 500px;
    background: url(${Folha});
    border-radius: 1rem;
    padding: 2rem;
    width: 600px;
    height: 100%;

    @media (max-width: 530px){
        width: 300px;
        margin-left: 30px;
        }

        @media (max-width: 350px){
            width: 250px;
            margin-left: 50px;
        }

    h2{
        margin-bottom: 2rem;
        color: #000;
        font-family: 'Harry Potter', sans-serif;
        font-size: 25px;
    }

    p{
        color: #000;
    }

    .question1{
        color: #000;
        font-weight: bold;
        margin-bottom: 20px;
    }

    button{
        font-weight: bold;
        font-size: 1.2em;
        cursor: pointer;
        border-radius: 20px;
        border: 2px solid #000;
        background: linear-gradient(135deg, rgba(255,134,0,1) 30%, rgba(207,0,0,1) 100%);
        color: white;
        padding: 10px 60px;

        &:hover{
            background: linear-gradient(135deg, rgba(207,0,0,1)  30%, rgba(255,134,0,1) 100%);
        }

        @media (max-width: 350px){
            padding: 10px 30px
        }
    }
`