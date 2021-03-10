import React from "react";
import { Content, Header4Dark, HrDark, Text, Photo } from "./Styles";

const About = () => {
  return (
    <Content>
      <Header4Dark>About me </Header4Dark>
      <HrDark />
      <Photo></Photo>
      <Text>
        Hi I'm Maciej and I'm here to deliver you custom tailored
        web applications. My scope of interest are frameworks such as React with
        Redux and some well-known libraries such as styled-components,
        react-router-dom. Another technology I'm eager to explore is Node.js and
        also Ubuntu server managment. I have basic knowledge and understanding
        of Angular and React Native but yet with no production experience. Below
        are my officialy implemented projects and side projects made through
        postgraduate studies. Privately I love playing guitar (when I've got
        time for that) and also love cooking so there's a whole lotta of love ;){" "}
      </Text>
    </Content>
  );
};
export default About;
