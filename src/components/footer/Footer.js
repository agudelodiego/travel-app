import React,{useState} from "react";
import styled from "styled-components";
import {P} from "../Textos/Textos.js"; 
import logo from "../../assets/Logo.png";
import Facebook from "../FacebookIcon/Facebook.js";
import Instagram from "../InstagramIcon/Instagram.js";
import Twitter from "../TwitterIcon/Twitter.js";



//*-------------------------------------------------------------------------------------------
// Footer de la aplicacion
const AppFooter = styled.footer`
    width: 100%;
    background-color: #F7F8FC;
    padding: 4rem 15%;
`;
//*-------------------------------------------------------------------------------------------





//*-------------------------------------------------------------------------------------------
// Contenido del footer
const FooterContent = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: ${props => props.width};
    height: ${props => props.height};
    padding: ${props => props.padding};

    &.col2{
        @media screen and (max-width: 700px) {
            width: 100%;
            justify-content: center;
        }
    }
`;
//*-------------------------------------------------------------------------------------------





//*-------------------------------------------------------------------------------------------
// Columnas del footer
const FooterCol = styled(FooterContent)`
    justify-content: center;
    align-items: start;
    flex-direction: column;
    width: ${props => props.width};
    height: ${props => props.height};
    padding: ${props => props.padding||0};

    @media screen and (max-width: 700px){
        width: 100%;
        align-items: center;
        padding: 15px 0;
    }
`;  
//*-------------------------------------------------------------------------------------------





//*-------------------------------------------------------------------------------------------
// Copirght del footer
const Copirght = styled(FooterContent)`
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1rem 0;
    border-top: 2px solid #999999;
`;
//*-------------------------------------------------------------------------------------------




//*-------------------------------------------------------------------------------------------
// Logo de la empresa
const Logo = styled.img`
    width: 6.25rem;
    height: auto;
    padding: 0 0 1.5rem 0;
`;
//*-------------------------------------------------------------------------------------------



//*-------------------------------------------------------------------------------------------
// Botonoes que redirigiran a las redes sociales de la empresa
const ContenedroBtns = styled.div`
    display: flex;
    width: auto;
    height: auto;
`;
const RedesBtns = styled.button`
    border: none;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    margin: 18px 8px;
    transition: background-color 0.6s;

    &:hover{
        background-color: #FA7436;
        fill: #fff;
    }
`;
// Stilos para los iconos 
const FbBtn = styled(Facebook)`
    fill: inherit;
    transition: fill 0.6s;
`;
const IgBtn = styled(Instagram)`
    fill: inherit;
    transform: fill 0.6;
`;
const TwBtn = styled(Twitter)`
    fill: inherit;
    transform: fill 0.6;
`;
//*-------------------------------------------------------------------------------------------




//*-------------------------------------------------------------------------------------------
// Funcion encargada de renderizar el footer
const Footer = ()=>{

    // Estados de los hover de los elementos
    const [fb,setFb] = useState(false);
    const[ig,setIg] = useState(false);
    const [tw,setTw] = useState(false);



    return(
        <AppFooter>
            <FooterContent width="100%" padding="50px 0">
                <FooterCol width="30%" padding="15px 10px" >
                    <Logo src={logo} alt="Logo de la compalia" />
                    <P fontFamily="Poppins" fontSize="1rem" color="#666666" fontWeight="300">
                        Book your trip in minute, get full Control for much longer. 
                    </P>
                    <ContenedroBtns>
                        <RedesBtns><FbBtn /></RedesBtns>
                        <RedesBtns><IgBtn /></RedesBtns>
                        <RedesBtns><TwBtn /></RedesBtns>
                    </ContenedroBtns>
                </FooterCol>
                <FooterContent className="col2" width="65%">
                    <FooterCol>
                        <P fontFamily="Poppins" fontSize="1rem" color="#222222" fontWeight="600">Company</P>
                        <P fontFamily="Poppins" fontSize="1rem" color="#666666" fontWeight="300">About</P>
                        <P fontFamily="Poppins" fontSize="1rem" color="#666666" fontWeight="300">Careers</P>
                        <P fontFamily="Poppins" fontSize="1rem" color="#666666" fontWeight="300">Logistic</P>
                        <P fontFamily="Poppins" fontSize="1rem" color="#666666" fontWeight="300">Privacy & Policy</P>
                    </FooterCol>
                    <FooterCol>
                        <P fontFamily="Poppins" fontSize="1rem" color="#222222" fontWeight="600">Contact</P>
                        <P fontFamily="Poppins" fontSize="1rem" color="#666666" fontWeight="300">Help/FAQ</P>
                        <P fontFamily="Poppins" fontSize="1rem" color="#666666" fontWeight="300">Press</P>
                        <P fontFamily="Poppins" fontSize="1rem" color="#666666" fontWeight="300">Affilates</P>
                    </FooterCol>
                    <FooterCol>
                        <P fontFamily="Poppins" fontSize="1rem" color="#222222" fontWeight="600">More</P>
                        <P fontFamily="Poppins" fontSize="1rem" color="#666666" fontWeight="300">Press Centre</P>
                        <P fontFamily="Poppins" fontSize="1rem" color="#666666" fontWeight="300">Our blog</P>
                        <P fontFamily="Poppins" fontSize="1rem" color="#666666" fontWeight="300">Low fare tips</P>
                    </FooterCol>
                </FooterContent>
            </FooterContent>
            <Copirght>
                <P fontFamily="Poppins" fontSize="1rem" color="#666666" fontWeight="300">Copyright, Trabook 2022. All rights reserved.</P>
                <P fontFamily="Poppins" fontSize="1rem" color="#666666" fontWeight="300">Terms & Conditions</P>
            </Copirght>
        </AppFooter>
    );
};
export default Footer;
//*-------------------------------------------------------------------------------------------