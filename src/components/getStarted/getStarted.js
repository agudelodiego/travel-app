import React from "react";
import styled from "styled-components";
import turista from "../../assets/turista.png";
import Boton from "../botones/Botones.js";
import aviones from "../../assets/aviones.png";
import Contenido from "../contenido/Contenido.js";
import desplegable from "../../assets/desplegable.png";
import Section from "../Secciones/Seccion.js";
import Texto from "../Textos/Textos.js";




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
// Contenedor para el recuador de explore
const ExploreContainer = styled.div`
    width: 44rem;
    height: auto;
    background-color: #FFFFFF;
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 20px;
    
    @media screen and (max-width: 700px){
        flex-direction: column;
        width: 90%;
    }
`;
// Contenedor para el desplegable
const DesplegableContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    color: #666666;
    font-size: 0.8rem;
    padding: 20px 0;
`;
// Elementos desplegables
const Desplegable = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #222222;
    font-size: 1rem;
    font-weight: 400;
    /* padding: 12px 0; */
`;
// Icono desplegable
const DesplegableIcon = styled.img`
    width: 0.7rem;
    height: auto;
    margin-left: 10px;
`;
//*----------------------------------------------------------------



//*----------------------------------------------------------------
// Funcion encargada de renderizar la seccion
const GetStated = ()=>{
    return (
        <Section bgColor="#FEFCFB">
            <Contenido>
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
            </Contenido>
            <ExploreContainer>
                <DesplegableContainer>
                    <Desplegable>
                        Location
                        <DesplegableIcon src={desplegable} alt="Icono desplegable" />
                    </Desplegable>
                    Where are you going
                </DesplegableContainer>
                <DesplegableContainer>
                    <Desplegable>
                        Date
                        <DesplegableIcon src={desplegable} alt="Icono desplegable" />
                    </Desplegable>
                    When you will go
                </DesplegableContainer>
                <DesplegableContainer>
                    <Desplegable>
                        Guest
                        <DesplegableIcon src={desplegable} alt="Icono desplegable" />
                    </Desplegable>
                    Number of guest
                </DesplegableContainer>
                <Boton>Explore now</Boton>
            </ExploreContainer>
        </Section>
    );
}
export default GetStated;
//*----------------------------------------------------------------