import styled from "styled-components";






//*----------------------------------------------------------------
// Texto
const Texto = styled.p`
    font-size: 1rem;
    overflow: visible;
    color: #666666;
    margin: 0 0 70px 0;
    width: ${props => props.width || "auto"};
    text-align: ${props => props.align};
    padding: ${props => props.padding};
    position: relative;

    &.grande{
        font-size: 3rem;
        font-family: 'Volkhov', serif;
        color: #222222;
        margin: 0 0 40px 0;
    }
    &.naranja{
        color: #FA7436;
        display: inline;
        font-family: 'Volkhov', serif;
    }

    @media screen and (max-width: 600px){
        width: 80%;
    }
`;
export default Texto;
//*----------------------------------------------------------------




//*----------------------------------------------------------------
// Textos customs
export const P = styled.p`
    font-family: ${props => props.fontFamily};
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    font-weight: ${props => props.fontWeight};
    text-decoration: ${props => props.textDecoration||"none"};
`;
//*----------------------------------------------------------------