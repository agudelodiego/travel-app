import styled from "styled-components";





//*----------------------------------------------------------------------------
// Contenedro del slider
export const SliderContenedor = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 70%;
    height: 26.5rem;
    flex-wrap: nowrap;
    background-color: inherit;
    padding: 12px;
    overflow: hidden;
    scroll-behavior: smooth;

    @media screen and (max-width: 700px) {
        width: 19rem;
    }
`;
//*----------------------------------------------------------------------------




//*----------------------------------------------------------------------------
// Slider, este sera el que contendra todas las cards y el que hara el efecto de deslizarse sugun lo desee el usuario
export const SliderContent = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    transform: translateX(${props => props.slide});
    transition: transform 0.6s;
`;
//*----------------------------------------------------------------------------




//*----------------------------------------------------------------------------
// Cards que iran dentro del silider
export const SliderCards = styled.figure`
    height: 90%;
    width: 16.8rem;
    border: 2px solid rgba(102, 102, 102, 0.08);
    border-radius: 12px;
    margin: 0 10px;
    padding: 0;
`;
//*----------------------------------------------------------------------------




//*----------------------------------------------------------------------------
// Imagen que ira dentro de la card
export const SliderImg = styled.img`
    height: 70%;
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
    display: block;
`;
//*----------------------------------------------------------------------------




//*----------------------------------------------------------------------------
// Desciripcion de la card 
export const Descripcion = styled.figcaption`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
//*----------------------------------------------------------------------------





//*----------------------------------------------------------------------------
// Filas que iran dentro de la descripcion
export const DescripcionRow = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    padding: 5px 20px;
`;
//*----------------------------------------------------------------------------