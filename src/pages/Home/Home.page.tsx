import { useNavigate } from "react-router-dom";
import { Photo, Typography } from "../../components";
import * as C from "./home.styles";

import photo1 from "./assets/photo1.jpeg";
import photo2 from "./assets/photo2.jpeg";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <C.Container>
      <div style={{ display: "flex", marginBottom: 24 }}>
        <Photo src={photo1} rotate={-10} />
        <Photo src={photo2} rotate={10} />
      </div>

      <Typography variant="title">Nosso Cantinho </Typography>

      <Typography variant="subTitle" style={{ marginBottom: 32 }}>
        Thai & Kenzo 💛💙
      </Typography>

      <C.Button
        content="Primeiro mês de namoro"
        onClick={() => navigate("/first-birth")}
      />

      <C.Button
        content="Aniversário dela 2022"
        onClick={() => navigate("/her-birth")}
      />
    </C.Container>
  );
};
