import styled from "styled-components"

export const Button = styled.button`
display: inline-flex;
justify-content: center;
align-items: center;
width: 70px;
height: 50px;
border-radius: 10px;
border: none;
background-color: ${p=>p.theme.colors.button};
color:${p=>p.theme.colors.bgColor};
font-size: 18px;
cursor: pointer;

&:hover{
background-color: ${p=>p.theme.colors.accent};
}
`