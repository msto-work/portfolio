import React from "react";
import styled, {keyframes} from "styled-components";

const ImageGallery = (props) =>{
    const {images} = props;
    const fadeIn = keyframes`
        0%,100% {
            background-image:url("/images/${images[0]}.jpg");
        }
        25%{
            background-image:url("/images/${images[1]}.jpg");
        }
        50%{
            background-image:url("/images/${images[2]}.jpg");
        }
        75%{
            background-image:url("/images/${images[3]}.jpg");
        }
      
    `;
    const Container = styled.div`
    margin: 0 auto;
    width: 100%;
    `
    const Image = styled.div`
    margin: 0 auto;
    display:block;
    background-position: center;
    background-size: contain;
    background-repeat:no-repeat;
    width: 100%;
    height: 700px;
    max-height: 100%;
    max-width: 100%;   
    animation: ${()=>fadeIn} 20s 2s infinite;
    `

    return(
        <Container>
        <Image></Image>
        </Container>
    );
}
export default ImageGallery;