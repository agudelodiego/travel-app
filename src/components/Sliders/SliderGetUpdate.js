import React,{useState} from "react";
import styled from "styled-components";
import {SliderContenedor,SliderContent,SliderCards,SliderImg,Descripcion,DescripcionRow} from "./SliderComponents.js";
import {P} from "../Textos/Textos.js";
import { useMediaQuery } from "react-responsive";
import {BotonSlide,Img} from "./SliderDeals.js";



//Importamos las imagenes que iran dentro de los sliders
import flecha from "../../assets/flecha.png";
import amazing from "../../assets/amazing.png";
import travelFar from "../../assets/travelFar.png";
import africa from "../../assets/africa.png";
import timeHang from "../../assets/timeHang.png";




//*-------------------------------------------------------------------------------------------------------------
// Modificaremos un poco las cards
const CardsUpdates = styled(SliderCards)`
  border: none;
`;
//*-------------------------------------------------------------------------------------------------------------



//*-------------------------------------------------------------------------------------------------------------
// Modificaremos un poco el DescripcionRow
const DescripcionUpdate = styled(DescripcionRow)`
  padding: 8px 0;
`;
//*-------------------------------------------------------------------------------------------------------------





//*--------------------------------------------------------------------------
// Funcion encargada de renderizar el slider de vaction plan
const SliderUpdates = ()=>{

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
                <CardsUpdates>
                    <SliderImg src={amazing} alt="Imagen de roma" />
                    <Descripcion>
                        <DescripcionUpdate>
                          <P fontFamily="Poppins" fontSize="1.2rem" color="#222222" fontWeight="400">The Amazing Difference a Year of Travelling.</P>
                        </DescripcionUpdate>
                        <DescripcionUpdate>
                          <P fontFamily="Poppins" fontSize="1rem" color="#999999" fontWeight="300">July 27, 2021</P>
                        </DescripcionUpdate>
                    </Descripcion>
                </CardsUpdates>
                <CardsUpdates>
                    <SliderImg src={travelFar} alt="Imagen de osaka" />
                    <Descripcion>
                        <DescripcionUpdate>
                          <P fontFamily="Poppins" fontSize="1.2rem" color="#222222" fontWeight="400">Travel far enough, you meet yourself.</P>
                        </DescripcionUpdate>
                        <DescripcionUpdate>
                          <P fontFamily="Poppins" fontSize="1rem" color="#999999" fontWeight="300">July 27, 2021</P>
                        </DescripcionUpdate>
                    </Descripcion>
                </CardsUpdates>
                <CardsUpdates>
                    <SliderImg src={africa} alt="Imagen de madrid" />
                    <Descripcion>
                      <DescripcionUpdate>
                            <P fontFamily="Poppins" fontSize="1.2rem" color="#222222" fontWeight="400">How to Save Money While Visiting Africa.</P>
                          </DescripcionUpdate>
                          <DescripcionUpdate>
                            <P fontFamily="Poppins" fontSize="1rem" color="#999999" fontWeight="300">July 27, 2021</P>
                      </DescripcionUpdate>
                    </Descripcion>
                </CardsUpdates>
                <CardsUpdates>
                    <SliderImg src={timeHang} alt="Imagen de madrid" />
                    <Descripcion> 
                      <DescripcionUpdate>
                            <P fontFamily="Poppins" fontSize="1.2rem" color="#222222" fontWeight="400">Reflections on 5 Months of Travel: Time to Hang.</P>
                          </DescripcionUpdate>
                          <DescripcionUpdate>
                            <P fontFamily="Poppins" fontSize="1rem" color="#999999" fontWeight="300">July 27, 2021</P>
                      </DescripcionUpdate>
                    </Descripcion>
                </CardsUpdates>
                <CardsUpdates>
                    <SliderImg src={amazing} alt="Imagen de roma" />
                    <Descripcion>
                        <DescripcionUpdate>
                          <P fontFamily="Poppins" fontSize="1.2rem" color="#222222" fontWeight="400">The Amazing Difference a Year of Travelling.</P>
                        </DescripcionUpdate>
                        <DescripcionUpdate>
                          <P fontFamily="Poppins" fontSize="1rem" color="#999999" fontWeight="300">July 27, 2021</P>
                        </DescripcionUpdate>
                    </Descripcion>
                </CardsUpdates>
                <CardsUpdates>
                    <SliderImg src={travelFar} alt="Imagen de osaka" />
                    <Descripcion>
                        <DescripcionUpdate>
                          <P fontFamily="Poppins" fontSize="1.2rem" color="#222222" fontWeight="400">Travel far enough, you meet yourself.</P>
                        </DescripcionUpdate>
                        <DescripcionUpdate>
                          <P fontFamily="Poppins" fontSize="1rem" color="#999999" fontWeight="300">July 27, 2021</P>
                        </DescripcionUpdate>
                    </Descripcion>
                </CardsUpdates>
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
export default SliderUpdates;
//*--------------------------------------------------------------------------