import React from "react";
import styled from "styled-components";
import turista from "../../assets/turista.png";
import Boton from "../botones/Botones.js";
import aviones from "../../assets/aviones.png";




//*----------------------------------------------------------------
// Contenedor para el texto
const TextoContainer = styled.div`
    width: 32rem;
    height: auto;
    padding: 0 20px 20px 20px;

    @media screen and (max-width: 756px){
        order: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
    }    
`;
// Texto
const Texto = styled.p`
    font-size: 1rem;
    overflow: visible;
    color: #666666;
    margin: 0 0 70px 0;

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
`;
//*----------------------------------------------------------------




//*----------------------------------------------------------------
// Contenedor de la imagen
const CirculoNaranja = styled.div`
    width: 22rem;
    height: 22rem;
    position: relative;
    overflow: visible;
    display: flex;
    justify-content: center;
    background-color: #FA7436;
    border-radius: 50%;
    margin: 0 0 0 2rem;

    @media screen and (max-width: 756px){
        margin: 5rem 0 0 0;
    }
`;
// Mediante este cuadrado taparemos la mitad de ciculo, para lograr el efecto deseado
const Cuadrado = styled.div`
    width: 22rem;
    height: 11rem;
    background-color: #FEFCFB;
    position: absolute;
    top: 0;
`;
// Imagen de los aviones
const Aviones = styled.img`
    width: 26rem;
    height: auto;
    position: absolute;
    top: -6rem;
`;
// Imagen
const Imagen = styled.img`
    width: 20rem;
    height:25rem;
    object-fit: cover;
    position: absolute;
    top: -4rem;

    @media screen and (max-width: 756px){
        order: 1;
    }
`;
//*----------------------------------------------------------------




//*----------------------------------------------------------------
// Contenedor de la seccion
const Section = styled.section`
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: #FEFCFB;
`;
//*----------------------------------------------------------------



//*----------------------------------------------------------------
// Funcion encargada de renderizar la seccion
const GetStated = ()=>{
    return (
        <Section>
            <TextoContainer>
                <Texto className="grande">
                    Get started your exciting <Texto className="naranja grande">journey</Texto> width us
                </Texto>
                <Texto>
                    A Team of experienced tourism professionals will provide you with the best advice and tips for your desire place.
                </Texto>
                <Boton className="blanco">Discover now</Boton>
            </TextoContainer>
            <CirculoNaranja>
                <Cuadrado>
                    <Aviones src={aviones} alt="Icono de aviones en pleno vuelo"/>
                </Cuadrado>
                <Imagen src={turista} alt="Imagen de un turista" />
            </CirculoNaranja>
        </Section>
    );
}
export default GetStated;
//*----------------------------------------------------------------