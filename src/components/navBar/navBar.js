import React,{useState} from "react";
import styled from "styled-components";

// Importamos logo de la aplicación
import Logo from "../../assets/Logo.png";

// Importamos el icono menu, para el diseño responsivo
import menuIcon from "../../assets/menu.png";
import dotsIcon from "../../assets/dots.png";



//*---------------------------------------------------------------------
// Elemento header estilizado
const Header = styled.header`
    width: 100%;
    height: 5rem;
    background-color:  #FEFCFB;
    display: flex;
    justify-content: space-evenly;
    position: fixed;
    top: 0;

    @media screen and (max-width: 1000px) {
        justify-content: center;
    }
`;
//*---------------------------------------------------------------------





//*---------------------------------------------------------------------
// Elemento nav estilizado
const Nav = styled.nav`
    height: 100%;
    width: auto;
    flex-grow: 2;
    background-color: inherit;
    display: flex;
    justify-content: space-evenly;

    /* Responsive */
    @media screen and (max-width: 1000px) {
        position: absolute;
        top: 5rem;
        left: -250px;
        flex-direction: column;
        height: 400px;
        width: 250px;
        background-color: #FA7436;
        justify-content: center;
        align-items: center;
        flex-grow: 0;
        border-radius: 0 20px 20px;
        transform: translateX(0);
        transition: transform 0.5s ease-in-out;

        &.visible{
            transform: translateX(250px);
        }
    }
`;
// ELemento ul estilizado
const Ul = styled.ul`
    width: auto;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    /* Responsive */
    @media screen and (max-width: 1000px) {
        flex-direction: column;
        height: auto;
        width: 100%;
    }

`;
// Elementos li estilizados
const Li = styled.li`
    height: 100%;
    width: auto;
    list-style-type: none;
    display: flex;
    align-items: center;

    @media screen and (max-width: 1000px) {
        height: auto;
        width: 100%;
        justify-content: center;
    }
`;
// Enlaces
const Enlace = styled.a`
    text-decoration: none;
    font-size: 1rem;
    height: 50%;
    border-radius: 5px;
    border: none;
    display: flex;
    align-items: center;
    padding: 0 10px;
    margin: 0 5px;
    transition: background-color 0.5s;
    color: #222222;
    cursor: pointer;

    &:hover{
        background-color: #FA7436;
    }

    @media screen and (max-width: 1000px){
        color: #FFFFFF;
        width: 100%;
        height: auto;
        justify-content: center;
        padding: 16px 0;
    }
`;
//*---------------------------------------------------------------------





//*---------------------------------------------------------------------
//Loggin container
const LogContainer = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;

    /* Responsive */
    @media screen and (max-width: 1000px) {
        flex-direction: column;
        height: auto;
    }
`;
// Botonoes
const LogBtn = styled.button`
    height: 50%;
    width: auto;
    border: none;
    padding: 0 30px;
    margin: 0 5px;
    background-color: inherit;
    color: #FA7436;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;

    &.singup{
        background-color: #FA7436;
        color: #FFFFFF;
    }

    @media screen and (max-width: 1000px){
        color: #FFFFFF;
        padding: 16px 0;
    }
`;
//*---------------------------------------------------------------------



//*---------------------------------------------------------------------
// Elemento contenedor del logo
const LogoContainer = styled.div`
    height: 100%;
    width: auto;
    display: flex;
    flex-grow: 1;
    justify-content: end;
    align-items: center;

    @media screen and (max-width: 1000px) {
        flex-grow: 0;
    }
`;
// Logo
const LogoImg = styled.img`
    height: 1.2rem;
    width: auto;
`;
//*---------------------------------------------------------------------



//*---------------------------------------------------------------------
//Menu para la parte responsive
const MenuContainer = styled.div`
    width: auto;
    height: 5rem;
    align-items: center;
    display: none;
    padding: 0 15px;

    @media screen and (max-width: 1000px) {
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
    }
`;
const Menu = styled.img`
    height: 2rem;
    width: auto;
    cursor: pointer;   
`;
//*---------------------------------------------------------------------




//Funcion que renderiza el navbar responsivo
const NavigationBar = ()=>{

    //Estado
    const [visible,setVisible] = useState(false);

    const toggleVisible = ()=>{
        setVisible(!visible);
    }

    return (
        <Header>
            <MenuContainer onClick={toggleVisible}>
                <Menu src={visible ? dotsIcon : menuIcon} alt="Icono de menu" />
            </MenuContainer>
            <LogoContainer>
                <LogoImg src={Logo} alt="Logo" />
            </LogoContainer>
            <Nav className={visible ? "visible" : ""}>
                <Ul>
                    <Li>
                        <Enlace>Home</Enlace>
                    </Li>
                    <Li>
                        <Enlace>About</Enlace>
                    </Li>
                    <Li>
                        <Enlace>Destination</Enlace>
                    </Li>
                    <Li>
                        <Enlace>Tour</Enlace>
                    </Li>
                    <Li>
                        <Enlace>Blog</Enlace>
                    </Li>
                </Ul>
                <LogContainer>
                    <LogBtn>Login</LogBtn>
                    <LogBtn className="singup">Sign up</LogBtn>
                </LogContainer>
            </Nav>
        </Header>
    );
}
export default NavigationBar;