import React,{useState} from "react";
import styled from "styled-components";
import {SliderContenedor,SliderContent,SliderCards,SliderImg,Descripcion,DescripcionRow} from "./SliderComponents.js";
import {P} from "../Textos/Textos.js";
import { useMediaQuery } from "react-responsive";

//Importamos las imagenes que van en las cards
import madrid from "../../assets/madrid.png";
import paris from "../../assets/paris.png";
import firenze from "../../assets/firenze.png";
import london from "../../assets/london.png";
import star from "../../assets/star.png";
import ubicacionIcon from "../../assets/ubicacionGris.png";
import flecha from "../../assets/flecha.png";




//*--------------------------------------------------------------------------
// Imagen de las imagenes
export const Img = styled.img`
    height: 1rem;
    width: auto;
    margin-right: 5px;
    display: inline;

    &.sin{
        margin-right: 0;
    }
`;
//*--------------------------------------------------------------------------




//*--------------------------------------------------------------------------
// Puntuacion del destino
export const ConedorFlexible = styled.div`
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
`;
//*--------------------------------------------------------------------------



//*--------------------------------------------------------------------------
// Precio con descuento
const Precio = styled.p`
    background-color: #FFE7DB;
    color: #FA7436;
    border-radius: 5px;
    font-weight: 400;
    padding: 3px;
    margin-left: 4px;
`;
//*--------------------------------------------------------------------------




//*--------------------------------------------------------------------------
// Botones que actualizaran el estado del eslider
export const BotonSlide = styled.button`
    border: 2px solid rgba(153, 153, 153, 0.5);
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    background-color: #FEFCFB;
    transition: background-color 0.6s;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 4rem;

    &.right{
        right: 45%;
        @media screen and (max-width: 700px){
            right: 32%;
        }
    }
    &.left{
        left: 45%;
        transform: rotate(180deg);
        @media screen and (max-width: 700px){
            left: 32%;
        }
    }

    &:hover{
        background-color: #FA7436;
    }
`;
//*--------------------------------------------------------------------------



//*----------------------------------------------------------------------------
// Elemento encargado de renderizar el slider de la seccion de Deals and discounts
const SliderDeals = ()=>{

    // Estado en que se encuentra el slider
    const [slide,setSlide] = useState(0);

    // Usamo medias querys para conocer el tamaño del dispositivo
    const small = useMediaQuery({query:"(max-width: 700px)"});
    const medium = useMediaQuery({query:"(min-width: 701px) and (max-width: 1099px)"});
    const big = useMediaQuery({query:"(min-width: 1100px)"});

    // Metodos que haran mover el slider hacia adelante o hacia atras segun sea el caso
    const nextSlide = ()=>{
        if(small){
            if(slide > -90){
                setSlide(slide - 18.4);
            }
        }
        else if(medium){
            if(slide > -56){
                setSlide(slide - 18.4);
            }
        }
        else if(big){
            if(slide > -56){
                setSlide(slide - 20.4);
            }
        }
    }
    const prevSlide = ()=>{
        if(slide < 0){
            setSlide(slide+18.4)
        }
    }

    return(
        <SliderContenedor>
            <SliderContent slide={`${slide}rem`}>
                <SliderCards>
                    <SliderImg src={madrid} alt="Imagen de madrid" />
                    <Descripcion>
                        <DescripcionRow>
                            <P fontFamily="Poppins" fontSize="1.5rem" color="#222222" fontWeight="600">Madrid</P>
                            <ConedorFlexible> 
                                <Img src={star} alt="Icono de estrellas" />4.8
                            </ConedorFlexible>
                        </DescripcionRow>
                        <DescripcionRow>
                            <ConedorFlexible>
                                <Img src={ubicacionIcon} alt="Icono de ubicacion" />
                                <P fontFamily="Poppins" fontSize="0.9rem" color="#666666" fontWeight="300">Spain</P>
                            </ConedorFlexible>
                            <ConedorFlexible>
                                <P fontFamily="Poppins" fontSize="0.9rem" color="#666666" fontWeight="300" textDecoration="line-through">$950</P>
                                <Precio>$850</Precio>
                            </ConedorFlexible>
                        </DescripcionRow>
                    </Descripcion>
                </SliderCards>
                <SliderCards>
                    <SliderImg src={firenze} alt="Imagen de madrid" />
                    <Descripcion>
                        <DescripcionRow>
                            <P fontFamily="Poppins" fontSize="1.5rem" color="#222222" fontWeight="600">Firenze</P>
                            <ConedorFlexible> 
                                <Img src={star} alt="Icono de estrellas" />4.5
                            </ConedorFlexible>
                        </DescripcionRow>
                        <DescripcionRow>
                            <ConedorFlexible>
                                <Img src={ubicacionIcon} alt="Icono de ubicacion" />
                                <P fontFamily="Poppins" fontSize="0.9rem" color="#666666" fontWeight="300">Italy</P>
                            </ConedorFlexible>
                            <ConedorFlexible>
                                <P fontFamily="Poppins" fontSize="0.9rem" color="#666666" fontWeight="300" textDecoration="line-through">$850</P>
                                <Precio>$750</Precio>
                            </ConedorFlexible>
                        </DescripcionRow>
                    </Descripcion>
                </SliderCards>
                <SliderCards>
                    <SliderImg src={paris} alt="Imagen de madrid" />
                    <Descripcion>
                        <DescripcionRow>
                            <P fontFamily="Poppins" fontSize="1.5rem" color="#222222" fontWeight="600">Paris</P>
                            <ConedorFlexible> 
                                <Img src={star} alt="Icono de estrellas" />4.4
                            </ConedorFlexible>
                        </DescripcionRow>
                        <DescripcionRow>
                            <ConedorFlexible>
                                <Img src={ubicacionIcon} alt="Icono de ubicacion" />
                                <P fontFamily="Poppins" fontSize="0.9rem" color="#666666" fontWeight="300">France</P>
                            </ConedorFlexible>
                            <ConedorFlexible>
                                <P fontFamily="Poppins" fontSize="0.9rem" color="#666666" fontWeight="300" textDecoration="line-through">$699</P>
                                <Precio>$599</Precio>
                            </ConedorFlexible>
                        </DescripcionRow>
                    </Descripcion>
                </SliderCards>
                <SliderCards>
                    <SliderImg src={london} alt="Imagen de madrid" />
                    <Descripcion>
                        <DescripcionRow>
                            <P fontFamily="Poppins" fontSize="1.5rem" color="#222222" fontWeight="600">London</P>
                            <ConedorFlexible> 
                                <Img src={star} alt="Icono de estrellas" />4.8
                            </ConedorFlexible>
                        </DescripcionRow>
                        <DescripcionRow>
                            <ConedorFlexible>
                                <Img src={ubicacionIcon} alt="Icono de ubicacion" />
                                <P fontFamily="Poppins" fontSize="0.9rem" color="#666666" fontWeight="300">UK</P>
                            </ConedorFlexible>
                            <ConedorFlexible>
                                <P fontFamily="Poppins" fontSize="0.9rem" color="#666666" fontWeight="300" textDecoration="line-through">$850</P>
                                <Precio>$750</Precio>
                            </ConedorFlexible>
                        </DescripcionRow>
                    </Descripcion>
                </SliderCards>
                <SliderCards>
                    <SliderImg src={paris} alt="Imagen de madrid" />
                    <Descripcion>
                        <DescripcionRow>
                            <P fontFamily="Poppins" fontSize="1.5rem" color="#222222" fontWeight="600">Paris</P>
                            <ConedorFlexible> 
                                <Img src={star} alt="Icono de estrellas" />4.4
                            </ConedorFlexible>
                        </DescripcionRow>
                        <DescripcionRow>
                            <ConedorFlexible>
                                <Img src={ubicacionIcon} alt="Icono de ubicacion" />
                                <P fontFamily="Poppins" fontSize="0.9rem" color="#666666" fontWeight="300">France</P>
                            </ConedorFlexible>
                            <ConedorFlexible>
                                <P fontFamily="Poppins" fontSize="0.9rem" color="#666666" fontWeight="300" textDecoration="line-through">$699</P>
                                <Precio>$599</Precio>
                            </ConedorFlexible>
                        </DescripcionRow>
                    </Descripcion>
                </SliderCards>
                <SliderCards>
                    <SliderImg src={london} alt="Imagen de madrid" />
                    <Descripcion>
                        <DescripcionRow>
                            <P fontFamily="Poppins" fontSize="1.5rem" color="#222222" fontWeight="600">London</P>
                            <ConedorFlexible> 
                                <Img src={star} alt="Icono de estrellas" />4.8
                            </ConedorFlexible>
                        </DescripcionRow>
                        <DescripcionRow>
                            <ConedorFlexible>
                                <Img src={ubicacionIcon} alt="Icono de ubicacion" />
                                <P fontFamily="Poppins" fontSize="0.9rem" color="#666666" fontWeight="300">UK</P>
                            </ConedorFlexible>
                            <ConedorFlexible>
                                <P fontFamily="Poppins" fontSize="0.9rem" color="#666666" fontWeight="300" textDecoration="line-through">$850</P>
                                <Precio>$750</Precio>
                            </ConedorFlexible>
                        </DescripcionRow>
                    </Descripcion>
                </SliderCards>
            </SliderContent>
            <BotonSlide className="right" onClick={nextSlide} >
                <Img src={flecha} className="sin" alt="Icono de flecha derecha"/>
            </BotonSlide>
            <BotonSlide className="left" onClick={prevSlide} >
                <Img src={flecha} className="sin" alt="Icono de flecha derecha"/>
            </BotonSlide>
        </SliderContenedor>
    );
}
export default SliderDeals;
//*----------------------------------------------------------------------------