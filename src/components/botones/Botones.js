import styled from "styled-components";



//*----------------------------------------------------------------------
// Botones estilizados
const Boton = styled.button`
    border: none;
    background-color: #FA7436;
    display: flex; 
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 160px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 400;
    z-index: 20;
    color: #FFFFFF;

    &.blanco{
        background-color: #FFFFFF;
        border: 1.5px solid #FA7436; 
        color: #FA7436;
    }
`;
export default Boton;
//*----------------------------------------------------------------------