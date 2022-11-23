import styled from "styled-components";


export const WelcomeContainer = styled.div`
    text-align: center;
    max-width: 500px;

    h2, p{
        margin-bottom: 1rem;
    }

    p{
        color: #90ff58;

        @media (max-width: 350px){
            font-size: 10px;
        }
    }

    img{
        height: 500px;
        border-radius: 20px;

        @media (max-width: 510px){
            height: 350px;
        }

        @media (max-width: 405px){
            height: 250px;
        }
    }

    button{
        font-weight: bold;
        font-size: 1.2em;
        cursor: pointer;
        border-radius: 20px;
        border: none;
        background: radial-gradient(circle, rgba(98,255,120,1) 0%, rgba(0,133,3,1) 100%);
        color: white;
        padding: 10px 60px;

        &:hover{
            background: radial-gradient(circle, rgba(0,133,3,1) 0%, rgba(98,255,120,1) 100%);
            transform: scale(1.1);
            transition: 0.7s ease all;
        }
    }
`