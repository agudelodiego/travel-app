import React from "react";
import Section from "../Secciones/Seccion.js";
import SliderDeals from "../Sliders/SliderDeals.js";
import Texto from "../Textos/Textos.js";



//*--------------------------------------------------------------------------------
// Funcion encargada de renderizar la seccion deals and descounts
const Deals = ()=>{
    return(
        <Section bgColor="#FEFCFB">
            <Texto className="grande" align="center">
                Exclusive <Texto className="grande naranja">deals & discounts</Texto>
            </Texto>
            <Texto width="30rem" align="center" padding="0 12px">
                Discover our fantastic early booking discounts & start planning your journey.
            </Texto>
            <SliderDeals />
        </Section>
    );
}
export default Deals;
//*--------------------------------------------------------------------------------