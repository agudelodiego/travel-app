import React from "react";
import styled from "styled-components";
import Section from "../Secciones/Seccion.js";
import {P} from "../Textos/Textos.js";
import Boton from "../botones/Botones.js";
import email from "../../assets/email.png";
import palmeras from "../../assets/palmeras2.png";
import circulos from "../../assets/circulos.png";




//*----------------------------------------------------------------------------------------
// Modificaremos un poco la seccion
const SectionModified = styled(Section)`
    padding: 0;
`;
//*----------------------------------------------------------------------------------------



//*----------------------------------------------------------------------------------------
// Contenedor del formulario de subscripcion
const Contenedor = styled.div`
    width: 70%;
    height: 26rem;
    background-color:  #FA7436;
    border-radius: 16px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    padding: 12px;
    position: relative;

    @media screen and (max-width: 700px) {
        width: 90%;
        height: 30rem;
    }
`;
//*----------------------------------------------------------------------------------------





//*----------------------------------------------------------------------------------------
// Contenedor para el input de correo electronico
const Form = styled.form`
    width: 95%;
    height: 4rem;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    padding: 5px 10px;
    z-index: 50;
    
    @media screen and (min-width: 700px) and (max-width: 1000px) {
        width: 80%;
    }

    @media screen and (min-width: 1000px){
        width: 60%;
    }
`;
//*----------------------------------------------------------------------------------------





//*----------------------------------------------------------------------------------------
// Input en el que el usuario ingresara el correo electronico
const Input = styled.input`
    width: 75%;
    height: 100%;
    border: none;
    outline: none;
    padding: 0 0 0 10px;

    &::placeholder{
        padding: 0 0 0 3rem;
        background-image: url(${email});
        font-weight: 400;
        background-size: 2rem;
        background-repeat: no-repeat;
        background-position: 2% center;
    }

    @media screen and (max-width: 600px){
        width: 100%;
    }
`;
//*----------------------------------------------------------------------------------------




//*----------------------------------------------------------------------------------------
// Botoo de envio de formulario: Para este utilizaremos como base un componente boton, pero le cambiaremos unas cosas, sobre todo para hacerlo responsive
const SubscribeBtn = styled(Boton)`
    width: 25%;
    height: 3rem;
    z-index: 50;

    @media screen and (max-width: 600px){
        position: absolute;
        bottom: 10px;
        left: 50%;
        width: 8.25rem;
        margin-left: -4.125rem;
        background-color: #FFFFFF;
        color: #FA7436;
    }
`;
//*----------------------------------------------------------------------------------------




//*----------------------------------------------------------------------------------------
// Imagen flotante
const Palmeras = styled.img`
    position: absolute;
    top: 3rem;
    right: 4rem;
    width: 7rem;
    height: 7rem;

    @media screen and (max-width: 800px){
        display: none;
    }
`;
//*----------------------------------------------------------------------------------------




//*----------------------------------------------------------------------------------------
// Modificaremos un poco el componente parrafo, sobre todo para hacerlo responsive
const Pmodified = styled(P)`
    width: 60%;

    @media screen and (max-width: 700px){
        width: 90%;    
    }
`;
//*----------------------------------------------------------------------------------------





//*----------------------------------------------------------------------------------------
// Circulos de fondo flotantes
const Ciruclos = styled.img`
    width: 20rem;
    height: auto;
    z-index: 0;
    position: absolute;
    bottom: 0;
    left: 0;
`;
//*----------------------------------------------------------------------------------------




//*----------------------------------------------------------------------------------------
// Funcion encargada de renderizar la seccion
const Subscribe = ()=>{
    return(
        <SectionModified bgColor="#FEFCFB">
            <Contenedor>
                <Palmeras src={palmeras} alt="Imagen de fono de palmeras de playa"/>
                <Pmodified fontFamily="Volkhov" fontSize="3rem" color="#FFFFFF" textAlign="center">
                    Subscribe and get exclusive deals & offer.
                </Pmodified>
                <Form>
                    <Input type="email" name="userEmail" id="userEmail" placeholder="Enter your email" />
                    <SubscribeBtn>Subscribe</SubscribeBtn>
                </Form>
                <Ciruclos src={circulos} alt="Imagen de fondo" />
            </Contenedor>
        </SectionModified>
    );
};
export default Subscribe;
//*----------------------------------------------------------------------------------------