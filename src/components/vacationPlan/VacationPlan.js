import React from "react";
import styled from "styled-components";
import Section from "../Secciones/Seccion.js";
import Texto from "../Textos/Textos.js";
import palmeras from "../../assets/palmeras.png";
import SliderVacation from "../Sliders/SliderVacation.js";




//*---------------------------------------------------------------------------------------
// Estilos para la imagen flotante
const Palmera = styled.img`
    position: absolute;
    width: 6.6rem;
    height: auto;
    top: 0;
    right: -7rem;
    @media screen and (max-width: 700px) {
        display: none;
    }
`;
//*---------------------------------------------------------------------------------------



//*---------------------------------------------------------------------------------------
// Funcion encargada de renderizar la seccion de Best Vacation plan
const VacationPlan = ()=>{
    return(
        <Section bgColor="#FEFCFB">
            <Texto className="grande" align="center">
                Best <Texto className="grande naranja">vacation plan</Texto>
                <Palmera src={palmeras} alt="Imagen de palmeras en la playa" />
            </Texto>
            <Texto width="30rem" align="center" padding="0 12px">
                Plan your perfect vacation with our travel agency. Choose among hundreds of all-inclusive offers!
            </Texto>
            <SliderVacation />
        </Section>
    );
};
export default VacationPlan;
//*---------------------------------------------------------------------------------------