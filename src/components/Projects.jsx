import React from "react";
import {Content, Header4Dark, HrDark, Text, Header5Dark, A, Wrapper, Remark, Image } from "./Styles";
import ImageGallery from "./ImageGallery";

const Projects = () =>{
    const omniImages = ["omni-edu/omni-edu-news2", "omni-edu/omni-edu-lecture3", "omni-edu/omni-edu-lecture2", "omni-edu/omni-edu-news"];
    const adsBoardImages = ["ads-board/hot-offer", "ads-board/edit-offer", "ads-board/submit-form", "ads-board/search"]
    return(
        <>
         <Content>
          <Header4Dark>Production projects </Header4Dark>
          <HrDark/>
            <Text>Recently appended projects were mostly based on React and Redux frameworks with hooks approach. </Text>
          <br/>
          <Header5Dark><A target="_blank" href="https://omni-edu.pl">OMNI-EDU.PL</A></Header5Dark>
          <Wrapper>
              <Text>First big project I've made was app <A target="_blank" href="https://omni-edu.pl">omni-edu.pl</A> 
              <br/> 
              </Text>
              <Text>
              The purpose of this project was to communicate with participants of nursing specialization and share recordings of lectures from ZOOM app. 
              <br/>
              Basic functionality was to upload and stream videos by means of Node.js server and React UI representation. 
              App also utilizes basic capibilities of MongoDb database.</Text>
              <Remark>and there are more features yet to come...</Remark>
          </Wrapper>
        
          <ImageGallery images={omniImages}></ImageGallery>
        </Content>
        <Content>
        <Header4Dark>Side projects</Header4Dark>
          <HrDark/>
            <Text>During period of postdegree studies of Javascript Developer, on my spare time, I've made some projects with different technologies for training purposes. </Text>
            <br/>
          <Header5Dark><A target="_blank" href="">GAME OF LIFE</A></Header5Dark>
          <Wrapper>
              <Text>One of Javascript Developer exam projects was <A target="_blank" href="">Game Of Life</A> 
              <br/> 
              </Text>
              <Text>
              Project, fullfiling principles of John Horton Conway's algorithm, was first simple concept of utilizing JS design patterns. Try it for yourself.
              <br/>
              <Image ></Image>
             </Text>
             
          </Wrapper>
          <Header5Dark><A target="_blank" href="">BOUNCER</A></Header5Dark>
          <Wrapper>
              <Text>App for testing moving scheme of bouncing ball using pure Javascript design patterns.
              <br/> 
              </Text>
             
          </Wrapper>
         
          <Header5Dark><A target="_blank" href="">ADS BOARD</A></Header5Dark>
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
        <Text>Any questions? Just contact me! Don't hesitate, I'm craving for some conversation</Text>
        </Content>
        </>
    )
}
export default Projects;