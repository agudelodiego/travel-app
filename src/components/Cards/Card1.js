import styled from "styled-components";
import linea1 from "../../assets/linea1.png";
import linea2 from "../../assets/linea2.png";




//*-----------------------------------------------------------------------
// Contenedor para las cards
const ContenedorCards = styled.div`
    width: 80vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: inherit;

    @media screen and (max-width: 1000px){
        flex-direction: column;
        justify-content: space-between;
    }
`;
//*-----------------------------------------------------------------------




//*-----------------------------------------------------------------------
// Le daremo estilos a las cardas que iran en esta seccion
const Card = styled.div`
    width: 23.7rem;
    height: 17.4rem;
    padding: 30px;
    border-radius: 5px;
    background-image: url(${linea1});
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    margin: 20px;

    &.linea2{
        background-image: url(${linea2});
    }
`;
//*-----------------------------------------------------------------------
export {Card,ContenedorCards};