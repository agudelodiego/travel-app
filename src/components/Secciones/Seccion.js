import styled from "styled-components";



//*----------------------------------------------------------------
// Contenedor de la seccion
const Section = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.bgColor};
    padding: 7rem 0;
    overflow-x: hidden;
    position: relative;
`;
export default Section;
//*----------------------------------------------------------------