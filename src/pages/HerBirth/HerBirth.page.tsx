import { Howl } from "howler";

import {
  Container,
  Content,
  Photos,
  Photo,
  Button,
  FakeContainer,
  Header,
} from "./herBirth.styles";

import logo from "./assets/logo.png";
import photo1 from "./assets/foto5.jpeg";
import photo2 from "./assets/foto2.jpeg";
import photo3 from "./assets/foto4.jpeg";
import photo4 from "./assets/foto3.png";
import photo5 from "./assets/foto7.jpeg";
import photo6 from "./assets/foto1.jpeg";
import photo7 from "./assets/foto10.png";
import photo8 from "./assets/foto9.jpeg";
import music from "./assets/music.mp3";
import { useState } from "react";

var sound = new Howl({
  src: [music],
});

const LetterContainer = () => {
  return (
    <Container>
      <h1>Feliz aniversário Amoor ❤️❤️!</h1>

      <Content>
        <Photos>
          <Photo src={photo1} rotate={10} />
          <Photo src={photo4} rotate={-10} imagePosition="top" />
          <Photo src={photo3} rotate={15} />
          <Photo src={photo7} rotate={10} imagePosition="bottom" />
        </Photos>
        <p className="content">
          <p className="date">Londrina, Julho de 2022.</p>
          <p className="alert">
            Aviso: Este texto contém erros de gramática e concordância,
            recomendamos aos leitores cautela!
          </p>
          <br />
          Oii MEU AMOOR, minha emoo preferidaa (a única emo que eu talvez
          suporte um pouco), hoje é o seu dia! dia de ficar mais velha(quer
          dizer mais responsavél), dia de comemorar com quem você ama, dia de
          celebrar a vida, dia de olhar para trás e se orgulhar por quem você é
          HOJE!
          <br />
          <br />
          Você é uma menininh.. quer dizer MULHER incrível, te admiro aos montes
          meu amor, toda sua história de vida, sua resiliência, força de vontade
          e atitude, você é simplesmente FODA!
          <br />
          <br />
          Fico muito feliz por ter conhecido a menina mais linda do baile (no
          caso cervejada), feliz por você me permitir te conhecer, te cuidar, te
          amar, e claro feliz por estar hoje, neste dia tão especial ao seu
          lado!
          <br />
          <br />
          Pode parecer ridículo, mas só para escrever essas poucas palavas
          bagunçadas já me consumiu uns 50% dos meus neurônios de velhinho,
          então só quero freezar o meu amor por você, quero que saiba que pode
          contar cmg para TUDO! e que eu TE AMO, TE AMOOO muitoo ❤️❤️, quero
          partilhar a vida boa com você MEU AMOR! Então deixo aqui meus sinceros
          PARABÉNS e um FELIZ ANIVERSÁRIO!
          <br />
          <br />
          PS: Espero que a música não tenha acabado ainda kkk
          <br />
          <br />
          Com muito amor, SEU Kenzo!
        </p>
        <Photos>
          <Photo src={photo6} rotate={-12} imagePosition="top" />
          <Photo src={photo5} rotate={10} />
          <Photo src={photo2} rotate={-5} imagePosition="top" />
          <Photo src={photo8} rotate={15} imagePosition="top" />
        </Photos>
      </Content>
    </Container>
  );
};

export const HerBirth = () => {
  const [show, setShow] = useState(false);

  if (show) return <LetterContainer />;

  return (
    <FakeContainer>
      <Header>
        <img
          alt="logo"
          className="logo"
          src={logo}
          style={{ height: 60, width: 60, objectFit: "cover" }}
        />
      </Header>

      <p className="jblTitle">Bem vindo ao JBL Sound Test!</p>

      {/* <p className="jblTitle">
        Este é um ambiente feito por quem ama música, para quem ama música!
      </p> */}

      <p className="jblSmall">
        Vamos cuidar de todas as configurações e ajustes, para fazer com que sua
        experiência auditiva seja a melhor! E para isto basta clicar no botão a
        baixo e curtir!
      </p>

      <Button
        onClick={() => {
          sound.play();
          setShow(true);
        }}
      >
        Testar Som
      </Button>
    </FakeContainer>
  );
};
