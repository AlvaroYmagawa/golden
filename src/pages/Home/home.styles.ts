import styled from "styled-components";
import { Photo as PhotoC } from "../../components";

export const Container = styled.div`
  flex: 1;
  text-align: center;
  padding: 24px;

  h1 {
    font-size: 50px;
    color: #111;
  }
`;

export const Content = styled.div`
  display: flex;
  margin-top: 24px;
  justify-content: space-between;
  width: 100%;

  p {
    font-size: 30px;
    margin: 0 60px;
    color: #333;
  }
`;

export const Photo = styled(PhotoC)<{ rotate: number }>`
  margin-bottom: 24px;
  transform: rotate(${(props) => props.rotate}deg);
`;

export const Photos = styled.div``;
