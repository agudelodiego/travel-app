import React from "react";
import styled from "styled-components";
import Section from "../Secciones/Seccion.js";
import Texto from "../Textos/Textos.js";
import aviones from "../../assets/aviones2.png";
import {Card ,ContenedorCards } from "../Cards/Card1.js";
import wallet from "../../assets/wallet.png";
import recuadro from "../../assets/recuadro.png";
import ubicacion from "../../assets/ubicacion.png";




//*-----------------------------------------------------------------------
// Imagnes flotante
const ImagenFoltante = styled.img`
    position: absolute;
    right: -10rem;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;
//*-----------------------------------------------------------------------






//*-----------------------------------------------------------------------
// Estilizamos las imagenes que van dentro de las cards 
const CardsImg = styled.img`
    height: 50px;
    width: auto;
    display: block;
`;
//*-----------------------------------------------------------------------





//*-----------------------------------------------------------------------
// Textos que iran dentro de las cards 
const CardTitle = styled.h2`
    color: #222222;
    font-size: 1.5rem;
    font-weight: 600;
`;
const CardTx = styled.p`
    color: #666666;
    font-size: 1rem;
`;
//*-----------------------------------------------------------------------






//*------------------------------------------------------------------------
// Elemento encargado de renderizar la seccion de things you need
const YouNeed = ()=>{
    return (
        <Section bgColor="#F7F8FC">
            <Texto className="grande" padding="0 12px" align="center">
                Things you need <Texto className="naranja grande">to do</Texto>
                <ImagenFoltante src={aviones} alt="Imagen de aviones volando" />               
            </Texto>
            <Texto width="30rem" align="center" padding="0 12px" >
                We ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford.
            </Texto>
            <ContenedorCards>
                <Card>
                    <CardsImg src={recuadro} alt="Imagen de una billetera" />
                    <CardTitle>
                        Sign up
                    </CardTitle>
                    <CardTx>
                        Completes all the work associated with planning and processing
                    </CardTx>
                </Card>
                <Card className="linea2">
                    <CardsImg src={wallet} alt="Imagen de una billetera" />
                    <CardTitle>
                        Worth of Money
                    </CardTitle>
                    <CardTx>
                        After successful access then book from exclusive deals & pricing
                    </CardTx>
                </Card>
                <Card>
                    <CardsImg src={ubicacion} alt="Imagen de una billetera" />
                    <CardTitle>
                        Exciting Travel
                    </CardTitle>
                    <CardTx>
                        Start and explore a wide range of exciting travel experience.
                    </CardTx>
                </Card>
            </ContenedorCards>
        </Section>
    );
}
export default YouNeed;
//*------------------------------------------------------------------------