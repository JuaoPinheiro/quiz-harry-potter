import styled from "styled-components";

export const GameOverContainer = styled.div`
    text-align: center;
    max-width: 500px;
    display: flex;
    flex-direction: column;

    h2, p{
        margin-bottom: 1rem;
    }

    p{
        color: #ff7c18;
    }

    img{
        height: 400px;

        @media (max-width: 425px){
            height: 300px;
        }
    }

    h3{
        font-size: 22px;
        color: #ffffff;
        margin-bottom: 20px;
    }

    button{
        font-weight: bold;
        margin: 20px;
        font-size: 1.2em;
        cursor: pointer;
        border-radius: 20px;
        border: none;
        background: radial-gradient(circle, rgba(255,146,60,1) 0%, rgba(99,51,0,1) 100%);
        color: white;
        padding: 10px 60px;

        &:hover{
            background: radial-gradient(circle, rgba(99,51,0,1) 0%, rgba(255,146,60,1) 100%);
        }
    }
`