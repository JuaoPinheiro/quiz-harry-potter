import styled from "styled-components";

export const OptionContainer = styled.div`
    background-color: #945400;
    border-radius: .5rem;
    padding: 1rem;
    margin-bottom: 25px;
    cursor: pointer;
    opacity: .8;
    transition: 0.4s;

    &:hover{
        opacity: 1;
    }

    p{
        margin-bottom: 0;
        margin-top: 0;
    }

    .correct{
        background: #4aff4a;
        padding: 10px;
        border-radius: .5rem;
        font-weight: bold;
    }

    .wrong{
        background-color: #ff3f3f;
        padding: 10px;
        border-radius: .5rem;
        opacity: .4;
    }
`