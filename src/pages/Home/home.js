import React from "react";
import styled from "styled-components"
import Deals from "../../components/dealsDiscounts/DealsDiscounts";
import GetStated from "../../components/getStarted/getStarted";
import VacationPlan from "../../components/vacationPlan/VacationPlan";
import YouNeed from "../../components/YouNeed/YouNeed";





//*----------------------------------------------------------------------
// Contenedor principal de la home page
const Main = styled.main`
    width: 100vw;
    height: auto;
    background-color: #FEFCFB;
`;
//*----------------------------------------------------------------------




//*----------------------------------------------------------------------
// Funcion encargada de renderizar la home page
const HomePage = ()=>{
    return(
        <Main>
            <GetStated />
            <YouNeed />
            <Deals />
            <VacationPlan />
        </Main>
    );
}
//*----------------------------------------------------------------------
export default HomePage;