import React from "react";
import styled from "styled-components"
import GetStated from "../../components/getStarted/getStarted";
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
        </Main>
    );
}
//*----------------------------------------------------------------------
export default HomePage;