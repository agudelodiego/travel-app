import React,{useState} from "react";
import {SliderContenedor,SliderContent,SliderCards,SliderImg,Descripcion,DescripcionRow} from "./SliderComponents.js";
import {P} from "../Textos/Textos.js";
import { useMediaQuery } from "react-responsive";
import {BotonSlide,ConedorFlexible,Img} from "./SliderDeals.js";



//Importamos las imagenes que iran dentro de los sliders
import rome from "../../assets/rome.png";
import star from "../../assets/star.png";
import trip from "../../assets/trip.png";
import osaka from "../../assets/osaka.png";
import paris from "../../assets/paris.png";
import london from "../../assets/london.png";
import flecha from "../../assets/flecha.png";



//*--------------------------------------------------------------------------
// Funcion encargada de renderizar el slider de vaction plan
const SliderVacation = ()=>{

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

    return (
        <SliderContenedor>
            <SliderContent slide={`${slide}rem`}>
                <SliderCards>
                    <SliderImg src={london} alt="Imagen de roma" />
                    <Descripcion>
                        <DescripcionRow>
                            <P fontFamily="Poppins" fontSize="1.2rem" color="#222222" fontWeight="600">Rome, Italy</P>
                            <P fontFamily="Poppins" fontSize="1.2rem" color="#FA7436" fontWeight="600">$5.42k</P>
                        </DescripcionRow>
                        <DescripcionRow>
                            <ConedorFlexible>
                                <Img src={trip} alt="Icono de viajar" />
                                <P fontFamily="Poppins" fontSize="0.9rem" color="#666666" fontWeight="300">10 days trip</P>
                            </ConedorFlexible>
                            <ConedorFlexible>
                                <Img src={star} alt="Icono de strella" />
                                <P fontFamily="Poppins" fontSize="0.9rem" color="#666666" fontWeight="300">4.8</P>
                            </ConedorFlexible>
                        </DescripcionRow>
                    </Descripcion>
                </SliderCards>
                <SliderCards>
                    <SliderImg src={osaka} alt="Imagen de osaka" />
                    <Descripcion>
                        <DescripcionRow>
                            <P fontFamily="Poppins" fontSize="1.2rem" color="#222222" fontWeight="600">Osaka, Japan</P>
                            <P fontFamily="Poppins" fontSize="1.2rem" color="#FA7436" fontWeight="600">$2.5k</P>
                        </DescripcionRow>
                        <DescripcionRow>
                            <ConedorFlexible>
                                <Img src={trip} alt="Icono de viajar" />
                                <P fontFamily="Poppins" fontSize="0.9rem" color="#666666" fontWeight="300">7 days trip</P>
                            </ConedorFlexible>
                            <ConedorFlexible>
                                <Img src={star} alt="Icono de strella" />
                                <P fontFamily="Poppins" fontSize="0.9rem" color="#666666" fontWeight="300">4.7</P>
                            </ConedorFlexible>
                        </DescripcionRow>
                    </Descripcion>
                </SliderCards>
                <SliderCards>
                    <SliderImg src={paris} alt="Imagen de madrid" />
                    <Descripcion>
                        <DescripcionRow>
                            <P fontFamily="Poppins" fontSize="1.2rem" color="#222222" fontWeight="600">Paris, France</P>
                            <P fontFamily="Poppins" fontSize="1.2rem" color="#FA7436" fontWeight="600">$7.2k</P>
                        </DescripcionRow>
                        <DescripcionRow>
                            <ConedorFlexible>
                                <Img src={trip} alt="Icono de viajar" />
                                <P fontFamily="Poppins" fontSize="0.9rem" color="#666666" fontWeight="300">5 days trip</P>
                            </ConedorFlexible>
                            <ConedorFlexible>
                                <Img src={star} alt="Icono de strella" />
                                <P fontFamily="Poppins" fontSize="0.9rem" color="#666666" fontWeight="300">4.2</P>
                            </ConedorFlexible>
                        </DescripcionRow>
                    </Descripcion>
                </SliderCards>
                <SliderCards>
                    <SliderImg src={london} alt="Imagen de madrid" />
                    <Descripcion>
                        <DescripcionRow>
                            <P fontFamily="Poppins" fontSize="1.2rem" color="#222222" fontWeight="600">London, UK</P>
                            <P fontFamily="Poppins" fontSize="1.2rem" color="#FA7436" fontWeight="600">$10.7k</P>  
                        </DescripcionRow>
                        <DescripcionRow>
                            <ConedorFlexible>
                                <Img src={trip} alt="Icono de viajar" />
                                <P fontFamily="Poppins" fontSize="0.9rem" color="#666666" fontWeight="300">6 days trip</P>
                            </ConedorFlexible>
                            <ConedorFlexible>
                                <Img src={star} alt="Icono de strella" />
                                <P fontFamily="Poppins" fontSize="0.9rem" color="#666666" fontWeight="300">4.6</P>
                            </ConedorFlexible>
                        </DescripcionRow>
                    </Descripcion>
                </SliderCards>
                <SliderCards>
                    <SliderImg src={paris} alt="Imagen de roma" />
                    <Descripcion>
                        <DescripcionRow>
                            <P fontFamily="Poppins" fontSize="1.2rem" color="#222222" fontWeight="600">Rome, Italy</P>
                            <P fontFamily="Poppins" fontSize="1.2rem" color="#FA7436" fontWeight="600">$5.42k</P>
                        </DescripcionRow>
                        <DescripcionRow>
                            <ConedorFlexible>
                                <Img src={trip} alt="Icono de viajar" />
                                <P fontFamily="Poppins" fontSize="0.9rem" color="#666666" fontWeight="300">10 days trip</P>
                            </ConedorFlexible>
                            <ConedorFlexible>
                                <Img src={star} alt="Icono de strella" />
                                <P fontFamily="Poppins" fontSize="0.9rem" color="#666666" fontWeight="300">4.8</P>
                            </ConedorFlexible>
                        </DescripcionRow>
                    </Descripcion>
                </SliderCards>
                <SliderCards>
                    <SliderImg src={osaka} alt="Imagen de osaka" />
                    <Descripcion>
                        <DescripcionRow>
                            <P fontFamily="Poppins" fontSize="1.2rem" color="#222222" fontWeight="600">Osaka, Japan</P>
                            <P fontFamily="Poppins" fontSize="1.2rem" color="#FA7436" fontWeight="600">$2.5k</P>
                        </DescripcionRow>
                        <DescripcionRow>
                            <ConedorFlexible>
                                <Img src={trip} alt="Icono de viajar" />
                                <P fontFamily="Poppins" fontSize="0.9rem" color="#666666" fontWeight="300">7 days trip</P>
                            </ConedorFlexible>
                            <ConedorFlexible>
                                <Img src={star} alt="Icono de strella" />
                                <P fontFamily="Poppins" fontSize="0.9rem" color="#666666" fontWeight="300">4.7</P>
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
};
export default SliderVacation;
//*--------------------------------------------------------------------------