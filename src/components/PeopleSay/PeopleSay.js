import React from "react";
import styled from "styled-components";
import Section from "../Secciones/Seccion.js";
import ContenedorTx from "../Textos/Contenedor.js";
import {P} from "../Textos/Textos.js";
import testimonio from "../../assets/testimonio.png";
import {BotonSlide} from "../Sliders/SliderDeals.js";
import flecha from "../../assets/flecha.png";


//*-------------------------------------------------------------------------------------
// Esta seccion tendra dos elemento que seran responsivos, para lo cual usaremos un contenedor flexible
const ContenedorResponsive = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: inherit;

    @media screen and (max-width: 900px){
        flex-direction: column;
    }
`;
//*-------------------------------------------------------------------------------------




//*-------------------------------------------------------------------------------------
// Contenedor para los testimonios
const TestimonioContenedor = styled.div`
    width: 40vw;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center; 
    position: relative;
    padding: 0 0 0 7rem;

    @media screen and (max-width: 900px){
        width: 80vw;
        padding: 0;
        margin: 9rem 0 0 0;
    }
`;
//*-------------------------------------------------------------------------------------




//*-------------------------------------------------------------------------------------
// Testimonios
const Testimonio = styled.div`
    width: 30rem;
    height: 13rem;
    padding: 30px;
    position: relative;
    z-index: 100;
    border-radius: 12px;
    background-color: ${props => props.bgColor};
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    &.absolute{
        position: absolute;
        top: 5rem;
        left: 8rem;
        z-index: 0;
        border: 2px solid rgba(102, 102, 102, 0.08);
        width: 80%;
        height: 13rem;
        @media screen and (max-width: 700px){
            height: 15rem;
            width: 90%;
            left: 3rem;
        }
    }

    @media screen and (max-width: 900px){
        width: 90%;
        height: 15rem;
    }
`;
//*-------------------------------------------------------------------------------------




//*-------------------------------------------------------------------------------------
// Contenedor para las imagenes de las personas de los testimonios
const Img = styled.img`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: ${props => props.radius||0};
    position: absolute;
    top: ${props => props.top};
    left: ${props => props.left};
`;
//*-------------------------------------------------------------------------------------




//*-------------------------------------------------------------------------------------
// Botonoes
const Boton = styled(BotonSlide)`
    bottom: -5rem;

    &.right{
        right: 30%;
    }
    &.left{
        left: 30%;
    }
`;
//*-------------------------------------------------------------------------------------




//*-------------------------------------------------------------------------------------
// Funcion encargada de renderizar la seccion de people say
const PeopleSay = ()=>{
    return(
        <Section bgColor="#F7F8FC">
            <ContenedorResponsive>
                <ContenedorTx ancho="20rem" padding="0" align="center" >
                    <P fontFamily="Volkhov" fontSize="3rem" color="#222222" display="inline" textAlign="center">What people say</P>
                    <P fontFamily="Volkhov" fontSize="3rem" color="#FA7436" display="inline">about us</P>
                    <P fontFamily="Poppins" fontSize="1rem" color="#666666" display="block" margin="2rem 0 0 0">
                        Our Clients send us bunch of smilies with our services and we love them.
                    </P>
                    <Boton className="left">
                        <Img src={flecha} height="1rem" />
                    </Boton>
                    <Boton className="right">
                        <Img src={flecha} height="1rem" />
                    </Boton>
                </ContenedorTx>
                <TestimonioContenedor>
                    <Testimonio bgColor="#FFFFFF">
                        <Img src={testimonio} width="4.3rem" height="4.3rem" radius="50%" top="-30px" left="-30px" alt="Avatar de usuario" />
                        <P fontFamily="Poppins" fontSize="1rem" color="#444444" display="block">
                            “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                        </P>
                        <ContenedorTx>
                            <P fontFamily="Poppins" fontSize="1.125rem" color="#222222" display="block" fontWeight="600">
                                Mike Taylor
                            </P>
                            <P fontFamily="Poppins" fontSize="1rem" color="#444444" display="block">
                                Lahore, Pakistan
                            </P>
                        </ContenedorTx>
                    </Testimonio>
                    <Testimonio className="absolute" bgColor="#F7F8FC">
                        <P fontFamily="Poppins" fontSize="1rem" color="#777777" display="block">
                            “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                        </P>
                        <ContenedorTx>
                            <P fontFamily="Poppins" fontSize="1.125rem" color="#777777" display="block" fontWeight="600">
                                Chris Thomas
                            </P>
                            <P fontFamily="Poppins" fontSize="1rem" color="#777777" display="block">
                                CEO of red button
                            </P>
                        </ContenedorTx>
                    </Testimonio>
                </TestimonioContenedor>
            </ContenedorResponsive>
        </Section>
    );
};
export default PeopleSay;
//*-------------------------------------------------------------------------------------