import React from "react";
import Section from "../Secciones/Seccion.js";
import SliderUpdates from "../Sliders/SliderGetUpdate.js";
import {P} from "../Textos/Textos.js";




//*----------------------------------------------------------------------------------------
// Funcion encargada de renderizar la seccion de Get update
const GetUpdate = ()=>{
    return(
        <Section bgColor="#FEFCFB">
            <P fontFamily="Volkhov" fontSize="3rem" color="#222222" display="inline" textAlign="center">Get update with</P>
            <P fontFamily="Volkhov" fontSize="3rem" color="#FA7436" display="inline">lasted blog</P>
            <SliderUpdates />
        </Section>
    );
};
export default GetUpdate;
//*----------------------------------------------------------------------------------------