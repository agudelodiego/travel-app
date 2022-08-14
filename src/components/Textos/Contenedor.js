import styled from "styled-components";





//*----------------------------------------------------------------------------
// Contenedores para los textos
const ContenedorTx = styled.div`
    width: ${props => props.ancho};
    height: auto;
    padding: ${props => props.padding};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${props => props.align};
`;
export default ContenedorTx;
//*----------------------------------------------------------------------------