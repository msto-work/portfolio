import React from "react";
import styled from "styled-components";

const Footer = () =>{

    const Container = styled.div`
    display:block;
    position:absolute;
    margin: 0 auto;
    width:100%;
    heigth:120px;
    text-align: center;
    font-family: "Raleway", sans-serif;
    background-color:gray;
    color: white;
    opacity:1;
    `

    return(
        <Container>
            <h4>Maciej Stojak</h4>
        </Container>
    )

}
export default Footer;
