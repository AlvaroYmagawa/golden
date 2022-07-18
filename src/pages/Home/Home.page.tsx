import React from "react";

import { Container, Content, Photos, Photo } from "./home.styles";

import photo1 from "../../assets/foto5.jpeg";
import photo2 from "../../assets/foto2.jpeg";
import photo3 from "../../assets/foto4.jpeg";
import photo4 from "../../assets/foto3.png";
import photo5 from "../../assets/foto7.jpeg";
import photo6 from "../../assets/foto1.jpeg";

const Home = () => {
  return (
    <Container>
      <h1>Feliz aniversário Amooor!</h1>

      <Content>
        <Photos>
          <Photo src={photo1} rotate={10} />
          <Photo src={photo4} rotate={-10} imagePosition="top" />
          <Photo src={photo3} rotate={15} />
        </Photos>
        <p>
          acsgca ascyacsgyas csaygcsaycs casygcsaygy csaygcsaygcsyg csaygcasyg
          acsgca ascyacsgyas csaygcsaycs casygcsaygy csaygcsaygcsyg csaygcasyg
          acsgca ascyacsgyas csaygcsaycs casygcsaygy csaygcsaygcsyg csaygcasyg
          acsgca ascyacsgyas csaygcsaycs casygcsaygy csaygcsaygcsyg csaygcasyg
          acsgca ascyacsgyas csaygcsaycs casygcsaygy csaygcsaygcsyg csaygcasyg
          acsgca ascyacsgyas csaygcsaycs casygcsaygy csaygcsaygcsyg csaygcasyg
          acsgca ascyacsgyas csaygcsaycs casygcsaygy csaygcsaygcsyg csaygcasyg
          acsgca ascyacsgyas csaygcsaycs casygcsaygy csaygcsaygcsyg csaygcasyg
        </p>
        <Photos>
          <Photo src={photo6} rotate={-12} imagePosition="top"/>
          <Photo src={photo5} rotate={10} />
          <Photo src={photo2} rotate={-5} imagePosition="top"/>
        </Photos>
      </Content>
    </Container>
  );
};

export { Home };
