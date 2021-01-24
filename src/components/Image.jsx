import React from "react";
import styled, {keyframes} from "styled-components";
import mountain1 from "../assets/css/mountain1.jpg";
import mountain2 from "../assets/css/mountain2.jpg";
import forest from "../assets/css/forest.jpg";
import tree from "../assets/css/tree.jpg";

const Image = () =>{
    
const changeImg = keyframes`
0%  {background-image: url(${mountain1});}
25% {background-image: url(${tree});}
50% {background-image: url(${mountain2});}
75% {background-image: url(${forest});}
100%  {background-image: url(${mountain1});}
`
const ImageFade = styled.div`
background-size: cover;
  display: block;
  position:relative;
  margin: 0 auto;
  width:100%;
  height: 100vh;
  max-height: 100%;
  max-width: 100%;   
animation: ${()=>changeImg} 20s infinite;
`
const FadeContainer = styled.div`
position: absolute;
z-index:0.7;
width:80%;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
opacity:0.5;
background-color: white;
`
const Logo = styled.div`
position: absolute;
text-align: center;
font-family: "Bodoni Moda", serif; 
z-index: 2;
font-size: 4em;
color: white;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: rgba(0,0,0,0.5);
padding:15px;

`
const Header4Light = styled.h4`
font-family: "Spartan", sans-serif; 
color: white; 
`
const HrLight = styled.hr`
  color:white;
  width:100%;
  opacity:1;
`

    return(
        
      <ImageFade >
       
       <Logo >Maciej Stojak<br/> 
        <HrLight/>
         <Header4Light>Welcome to my site!</Header4Light> 
         <Header4Light>Check my projects and feel free to contact me</Header4Light>
         
         </Logo>
       <br/>
     </ImageFade>
    )
}
export default Image;