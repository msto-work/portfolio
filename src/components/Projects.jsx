import React from "react";
import {Content, Header4Dark, HrDark, Text, Header5Dark, A, Wrapper, Remark, Image } from "./Styles";
import ImageGallery from "./ImageGallery";

const Projects = () =>{
   
    const adsBoardImages = ["ads-board/hot-offer", "ads-board/edit-offer", "ads-board/submit-form", "ads-board/search"]
    return(
        <>
         <Content>
          <Header4Dark>Production projects </Header4Dark>
          <HrDark/>
            <Text>Recently appended projects were mostly based on React and Redux frameworks with hooks approach. </Text>
          <br/>
          
        </Content>
        <Content>
        <Header4Dark>Side projects</Header4Dark>
          <HrDark/>
            <Text>During period of postdegree studies of Javascript Developer, on my spare time, I've made some projects with different technologies for training purposes. </Text>
            <br/>
          <Header5Dark><A target="_blank" href="http://gameoflife.maciejstojak.pl/">GAME OF LIFE</A></Header5Dark>
          <Wrapper>
              <Text>One of Javascript Developer exam projects was <A target="_blank" href="http://gameoflife.maciejstojak.pl/">Game Of Life</A> 
              <br/> 
              </Text>
              <Text>
              Project, fullfiling principles of John Horton Conway's algorithm, was first simple concept of utilizing JS design patterns. Try it for yourself.
              <br/>
             
             </Text>
             
          </Wrapper>
          <Image ></Image>
          </Content>
          <Content>
         
          <Header5Dark><A target="_blank" href="http://adsboard.maciejstojak.pl">Ads Board</A></Header5Dark>
          <Wrapper>
              <Text>Project for ads managment, made with Node.js, Express.js, EJS template engine and MongoDB. Basic CRUD operations.
              <br/> 
              </Text>
             
          </Wrapper>
          <ImageGallery images={adsBoardImages}></ImageGallery>
        </Content>
        <HrDark></HrDark>
        <Content>
        <Text>There are more projects on my github account. If you're willing to see more than I encourage you to visit my github account on <A href="https://github.com/macstojak" target="_blank">https://github.com/macstojak</A></Text>
        <br/>
    
        </Content>
        </>
    )
}
export default Projects;
