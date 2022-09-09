import styled from "styled-components";
import { ImagePosition } from "./photo.interfaces";

export const Container = styled.div<{ rotate: number }>`
  padding: 16px 8px 48px 8px;
  background-color: #fff;
  width: 200px;
  box-shadow: 0px 2px 16px #00000020;
  transform: rotate(${(props) => props.rotate}deg);
`;

export const Image = styled.img<{ imagePosition: ImagePosition }>`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  object-position: ${(props) => props.imagePosition};
`;
