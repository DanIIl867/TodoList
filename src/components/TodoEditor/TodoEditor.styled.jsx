import styled from "styled-components";

export const Editor = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid black;
    border-radius: 5px;
`


export const TextArea = styled.textarea`
    width: 100%;
    height: 100px;
    border-radius: 5px;
`