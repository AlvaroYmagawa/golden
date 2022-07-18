import styled from "styled-components";
import { ImagePosition } from "./photo.interfaces";

export const Container = styled.div`
  padding: 16px 8px 48px 8px;
  background-color: #fff;
  width: 200px;
  box-shadow: 0px 2px 16px #00000020;
`;

export const Image = styled.img<{ imagePosition: ImagePosition }>`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  object-position: ${(props) => props.imagePosition};
`;
